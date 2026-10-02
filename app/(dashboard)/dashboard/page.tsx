import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Dashboard from "@/features/dashboard/overview/Dashboard";
import { isResumeAnalysis } from "@/features/dashboard/analysis/types";
import { prisma } from "@/lib/prisma";
import { getCurrentUsagePeriodStart } from "@/lib/usage";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
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

  const monthlyAnalysisCount = analyses.filter(
    (analysis) => analysis.createdAt >= getCurrentUsagePeriodStart(),
  ).length;

  return (
    <Dashboard
      user={session.user}
      history={history}
      monthlyAnalysisCount={monthlyAnalysisCount}
    />
  );
}
