import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  trustedOrigins: [
    "http://localhost:3000",
    "https://ai-resume-reviewer-git-v1-shivam-dhmns-projects.vercel.app",
    "https://ai-resume-reviewer-nine-drab.vercel.app/",
    "https://ai-resume-reviewer-shivam-dhmns-projects.vercel.app/"
  ],

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },
});