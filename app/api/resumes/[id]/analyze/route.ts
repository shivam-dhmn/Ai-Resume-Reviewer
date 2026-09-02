import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { extractText, getDocumentProxy } from "unpdf";
import { headers } from "next/headers";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // 1. Check authentication
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    // 2. Get resume ID
    const { id } = await params;

    // 3. Find the resume belonging to the logged-in user
    const resume = await prisma.resume.findFirst({
      where: {
        id,
        userId: session.user.id,
      },
    });

    if (!resume) {
      return Response.json(
        { error: "Resume not found" },
        { status: 404 },
      );
    }

    // 4. Download the private PDF from Vercel Blob
    const response = await fetch(resume.fileUrl, {
      headers: {
        Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.error(
        "Blob download failed:",
        response.status,
        response.statusText,
      );

      return Response.json(
        { error: "Failed to retrieve resume file" },
        { status: 500 },
      );
    }

    // 5. Convert PDF into bytes
    const buffer = await response.arrayBuffer();

    // 6. Load the PDF
    const pdf = await getDocumentProxy(
      new Uint8Array(buffer),
    );

    // 7. Extract text
    const { totalPages, text } = await extractText(pdf, {
      mergePages: true,
    });

    // 8. Make sure we actually extracted something
    if (!text || !text.trim()) {
      return Response.json(
        {
          error:
            "Could not extract readable text from this PDF.",
        },
        { status: 422 },
      );
    }

    // 9. Save extracted text in Neon
    const updatedResume = await prisma.resume.update({
      where: {
        id: resume.id,
      },
      data: {
        extractedText: text,
      },
    });

    // 10. Return result
    return Response.json({
      message: "Resume text extracted successfully.",
      resume: {
        id: updatedResume.id,
        fileName: updatedResume.fileName,
        totalPages,
        extractedText: updatedResume.extractedText,
      },
    });
  } catch (error) {
    console.error("Resume analysis error:", error);

    return Response.json(
      {
        error: "Something went wrong while extracting the resume.",
      },
      { status: 500 },
    );
  }
}