import ResumeUploadCard from "../upload/ResumeUploadCard";
import Link from "next/link";
import type { AnalysisHistoryItem } from "../history/AnalysisHistory";
import { MONTHLY_ANALYSIS_LIMIT } from "@/lib/usage";

type DashboardProps = {
  history: AnalysisHistoryItem[];
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
  monthlyAnalysisCount: number;
};

const Dashboard = ({ user, history, monthlyAnalysisCount }: DashboardProps) => {
  const recentAnalyses = history.slice(0, 3);
  const averageScore = recentAnalyses.length
    ? Math.round(
        recentAnalyses.reduce((total, analysis) => total + analysis.score, 0) /
          recentAnalyses.length
      )
    : null;
  const remainingCredits = Math.max(
    MONTHLY_ANALYSIS_LIMIT - monthlyAnalysisCount,
    0,
  );
  const creditProgress = (remainingCredits / MONTHLY_ANALYSIS_LIMIT) * 100;

  return (
    <section className="min-h-full bg-gray-100 px-4 py-6 text-black sm:px-6 lg:p-8">
      {/* Top section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Welcome back, {user.name}
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here&apos;s your latest career intelligence briefing.
        </p>
      </div>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left / Main area */}
        <div className="space-y-6 lg:col-span-2">
          {/* Upload Resume */}
          <ResumeUploadCard />

          {/* Recent Analyses */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Analyses
              </h2>

              <Link
                href="/history"
                className="self-start text-sm text-blue-600 hover:underline sm:self-auto"
              >
                View All
              </Link>
            </div>

            <div className="mt-6 divide-y divide-slate-100">
              {recentAnalyses.map((analysis) => (
                <Link
                  key={analysis.id}
                  href={`/analysis/${analysis.id}`}
                  className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-800">
                      {analysis.document}
                    </p>
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {analysis.role} <span className="mx-1">·</span> {analysis.date}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md bg-slate-100 px-2.5 py-1 text-sm font-semibold text-slate-700">
                    {analysis.score}/100
                  </span>
                </Link>
              ))}
              {history.length === 0 && (
                <p className="py-5 text-sm text-slate-500">
                  No analyses yet. Upload a resume to get started.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right / Stats area */}
          
        <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-medium text-slate-500">
                MONTHLY ANALYSIS CREDITS
              </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {remainingCredits}
              <span className="text-sm font-normal text-slate-400">
                {" "}/ {MONTHLY_ANALYSIS_LIMIT}
              </span>
            </p>

            <div className="mt-4 h-2 rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${creditProgress}%` }}
              />
            </div>
          </div>

          {/* Average Score */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-medium text-slate-500">AVERAGE SCORE</p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {averageScore ?? "—"}
            </p>
          </div>

          {/* Pro Card */}
          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <h2 className="text-lg font-semibold">Unlock Pro Insights</h2>

            <p className="mt-2 text-sm text-slate-300">
              Get unlimited resume analyses and deeper career insights.
            </p>

            <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium hover:bg-blue-700">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
