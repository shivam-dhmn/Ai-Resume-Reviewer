import OverallScoreCard from "./OverallScoreCard";
import ATSCompatibilityCard from "./ATSCompatibilityCard";
import AnalysisBreakdown from "./AnalysisBreakdown";
import MissingKeywords from "./MissingKeywords";
import GrammarImpact from "./GrammarImpact";
import PriorityImprovements from "./PriorityImprovements";

const AnalysisResults = () => {
  return (
    <section className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
              AI Resume Analysis
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Senior Product Manager Resume
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Detailed analysis of your resume and career readiness.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50">
              Analyze Again
            </button>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white hover:bg-blue-700">
              Download Full Report
            </button>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          <OverallScoreCard />
          <ATSCompatibilityCard />
        </div>
        <AnalysisBreakdown />
        <MissingKeywords />
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <GrammarImpact />
          <PriorityImprovements />
        </div>
      </div>
    </section>
  );
};

export default AnalysisResults;
