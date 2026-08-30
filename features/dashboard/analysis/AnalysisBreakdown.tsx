import { CheckCircle2, AlertCircle } from "lucide-react";

const AnalysisBreakdown = () => {
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
            <div className="rounded-lg bg-emerald-50 p-3">
              <p className="text-sm font-medium text-slate-800">
                Strong leadership experience
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Your resume clearly demonstrates ownership and cross-functional
                leadership.
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-3">
              <p className="text-sm font-medium text-slate-800">
                Clear product ownership
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Your experience shows strong responsibility across product
                strategy and execution.
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-3">
              <p className="text-sm font-medium text-slate-800">
                Good resume structure
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                The document is easy to scan and follows a consistent structure.
              </p>
            </div>
          </div>
        </div>

        {/* Areas for Improvement */}
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <AlertCircle className="h-4 w-4" />
            Areas for Improvement
          </h3>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-amber-50 p-3">
              <p className="text-sm font-medium text-slate-800">
                Quantify your achievements
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Several bullets describe responsibilities without measurable
                business outcomes.
              </p>
            </div>

            <div className="rounded-lg bg-amber-50 p-3">
              <p className="text-sm font-medium text-slate-800">
                Strengthen technical evidence
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Add clearer evidence of analytics, experimentation, and technical
                decision-making.
              </p>
            </div>

            <div className="rounded-lg bg-amber-50 p-3">
              <p className="text-sm font-medium text-slate-800">
                Improve keyword coverage
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                A few important keywords for the target role are currently missing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisBreakdown;