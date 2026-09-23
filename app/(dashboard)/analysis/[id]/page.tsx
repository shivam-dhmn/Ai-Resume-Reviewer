import AnalysisResults from "@/features/dashboard/analysis/AnalysisResults";
import { isResumeAnalysis } from "@/features/dashboard/analysis/types";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

export default async function AnalysisResultsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [session, { id }] = await Promise.all([
    auth.api.getSession({ headers: await headers() }),
    params,
  ]);

  if (!session) {
    redirect("/login");
  }

  const analysis = await prisma.analysis.findFirst({
    where: {
      id,
      resume: {
        userId: session.user.id,
      },
    },
    include: {
      resume: {
        select: {
          fileName: true,
        },
      },
    },
  });

  if (!analysis || !isResumeAnalysis(analysis.result)) {
    notFound();
  }

  return (
    <AnalysisResults
      analysis={analysis.result}
      fileName={analysis.resume.fileName}
    />
  );
}
