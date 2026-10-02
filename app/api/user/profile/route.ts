import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function PATCH(request: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as {
      name?: string;
      email?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();

    if (!name) {
      return Response.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const normalizedEmail = email.toLowerCase();

    if (normalizedEmail !== session.user.email.toLowerCase()) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: normalizedEmail,
        },
      });

      if (existingUser && existingUser.id !== session.user.id) {
        return Response.json(
          { error: "This email address is already in use." },
          { status: 409 },
        );
      }
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name,
        email: normalizedEmail,
      },
    });

    return Response.json({
      success: true,
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    console.error("Profile update error:", error);

    return Response.json(
      { error: "Something went wrong while updating your profile." },
      { status: 500 },
    );
  }
}
