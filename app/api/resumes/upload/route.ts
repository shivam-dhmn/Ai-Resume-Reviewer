import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { put } from "@vercel/blob";
import { headers } from "next/headers";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    // 1. Check if the user is logged in
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2. Get the uploaded file
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return Response.json(
        { error: "No file was uploaded." },
        { status: 400 }
      );
    }

    // 3. Validate file type
    if (file.type !== "application/pdf") {
      return Response.json(
        { error: "Only PDF files are allowed." },
        { status: 400 }
      );
    }

    // 4. Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: "File size must be less than 5MB." },
        { status: 400 }
      );
    }

    // 5. Create a unique storage path
    const storagePath = `resumes/${session.user.id}/${crypto.randomUUID()}.pdf`;

    // 6. Upload the file to Vercel Blob
    const blob = await put(storagePath, file, {
      access: "private",
    });

    // 7. Create the resume record in Neon
    const resume = await prisma.resume.create({
      data: {
        userId: session.user.id,
        fileName: file.name,
        fileType: file.type,
        fileUrl: blob.url,
      },
    });

    // 8. Return success
    return Response.json({
      success: true,
      resume: {
        id: resume.id,
        fileName: resume.fileName,
        fileUrl: resume.fileUrl,
      },
    });
  } catch (error) {
    console.error("Resume upload error:", error);

    return Response.json(
      { error: "Something went wrong while uploading the resume." },
      { status: 500 }
    );
  }
}