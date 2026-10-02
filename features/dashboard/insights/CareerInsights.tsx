import PerformanceTrend from "./PerformanceTrend";
import type { ResumeAnalysis } from "../analysis/types";
import type { PerformanceTrendPoint } from "./PerformanceTrend";

type CareerInsightsProps = {
  latestAnalysis?: {
    overallScore: number;
    result: ResumeAnalysis;
  };
  trend: PerformanceTrendPoint[];
};

const CareerInsights = ({ latestAnalysis, trend }: CareerInsightsProps) => {
  if (!latestAnalysis) {
    return (
      <section className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:p-8">
        <div className="mx-auto max-w-7xl rounded-xl border border-slate-200 bg-white p-6">
          <h1 className="text-2xl font-bold text-slate-900">Career Insights</h1>
          <p className="mt-2 text-sm text-slate-500">
            Complete a resume analysis to see your career insights here.
          </p>
        </div>
      </section>
    );
  }

  const { result } = latestAnalysis;

  return (
    <section className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Career Insights
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Understand your strengths, identify career gaps, and see where
            your resume can improve.
          </p>
        </div>

        {/* Career Snapshot */}
        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Career Snapshot
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Current Focus */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                CURRENT FOCUS
              </p>

              <p className="mt-3 text-lg font-semibold text-slate-900">
                {result.targetRole}
              </p>
            </div>

            {/* Experience */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                EXPERIENCE SCORE
              </p>

              <p className="mt-3 text-lg font-semibold text-slate-900">
                {result.experience.score}/100
              </p>
            </div>

            {/* Resume Score */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                RESUME SCORE
              </p>

              <p className="mt-3 text-3xl font-bold text-blue-600">
                {latestAnalysis.overallScore}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Based on latest analysis
              </p>
            </div>

            {/* Analyses */}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-medium text-slate-400">
                ANALYSES COMPLETED
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                {trend.length}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Resume reviews
              </p>
            </div>
          </div>
        </div>

        {/* Strength + Gap */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Strength */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Top Strength
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              {result.strengths[0] ?? "No strength identified"}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {result.summary}
            </p>
          </div>

          {/* Main Gap */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Main Gap
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              {result.weaknesses[0] ?? "No gap identified"}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {result.priorityImprovements[0] ?? result.skills.feedback}
            </p>
          </div>

        </div>
        <PerformanceTrend scoreHistory={trend} />
      </div>
    </section>
  );
};

export default CareerInsights;
