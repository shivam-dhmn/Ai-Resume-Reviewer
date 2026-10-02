import AnalysisHistory from "@/features/dashboard/history/AnalysisHistory";
import { isResumeAnalysis } from "@/features/dashboard/analysis/types";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function HistoryPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const analyses = await prisma.analysis.findMany({
    where: {
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
    orderBy: {
      createdAt: "desc",
    },
  });

  const history = analyses.flatMap((analysis) => {
    if (!isResumeAnalysis(analysis.result) || analysis.overallScore === null) {
      return [];
    }

    return [{
      id: analysis.id,
      date: new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(analysis.createdAt),
      document: analysis.resume.fileName,
      role: analysis.result.targetRole,
      score: analysis.overallScore,
    }];
  });

  return <AnalysisHistory analyses={history} />;
}