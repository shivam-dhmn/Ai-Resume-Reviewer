import { CheckCircle2, AlertCircle } from "lucide-react";

type AnalysisBreakdownProps = {
  strengths: string[];
  weaknesses: string[];
};

const AnalysisBreakdown = ({ strengths, weaknesses }: AnalysisBreakdownProps) => {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Analysis Breakdown
      </h2>

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {/* Key Strengths */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
            <CheckCircle2 className="h-4 w-4" />
            Key Strengths
          </h3>

          <div className="mt-4 space-y-3">
            {strengths.map((strength) => (
              <div key={strength} className="rounded-lg bg-emerald-50 p-3">
                <p className="text-sm leading-5 text-slate-800">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <AlertCircle className="h-4 w-4" />
            Areas for Improvement
          </h3>

          <div className="mt-4 space-y-3">
            {weaknesses.map((weakness) => (
              <div key={weakness} className="rounded-lg bg-amber-50 p-3">
                <p className="text-sm leading-5 text-slate-800">{weakness}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisBreakdown;
