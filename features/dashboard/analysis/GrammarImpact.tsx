import { MessageSquareWarning, CheckCircle2 } from "lucide-react";

const GrammarImpact = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
          <MessageSquareWarning className="h-4 w-4 text-blue-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Grammar & Impact
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Improve clarity, phrasing, and measurable impact.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="border-l-2 border-blue-500 pl-4">
          <p className="text-sm font-medium text-slate-800">
            Strengthen achievement statements
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Replace responsibility-focused language with measurable outcomes
            and concrete results.
          </p>
        </div>

        <div className="border-l-2 border-blue-500 pl-4">
          <p className="text-sm font-medium text-slate-800">
            Use stronger action language
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Start bullets with concise action verbs that clearly communicate
            ownership.
          </p>
        </div>

        <div className="border-l-2 border-blue-500 pl-4">
          <p className="text-sm font-medium text-slate-800">
            Reduce vague wording
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Replace generic phrases with specific evidence of decisions,
            scale, and impact.
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
        Overall readability is strong.
      </div>
    </section>
  );
};

export default GrammarImpact;