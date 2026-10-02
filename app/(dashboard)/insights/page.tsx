import CareerInsights from "@/features/dashboard/insights/CareerInsights";
import { isResumeAnalysis } from "@/features/dashboard/analysis/types";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function CareerInsightsPage() {
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
    orderBy: {
      createdAt: "asc",
    },
  });

  const validAnalyses = analyses.flatMap((analysis) =>
    isResumeAnalysis(analysis.result) && analysis.overallScore !== null
      ? [{
          createdAt: analysis.createdAt,
          overallScore: analysis.overallScore,
          result: analysis.result,
        }]
      : [],
  );

  const latestAnalysis = validAnalyses.at(-1);
  const trend = validAnalyses.map((analysis) => ({
    date: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    }).format(analysis.createdAt),
    score: analysis.overallScore,
  }));

  return <CareerInsights latestAnalysis={latestAnalysis} trend={trend} />;
}
