import { MessageSquareWarning, CheckCircle2 } from "lucide-react";
import type { ScoreFeedback } from "./types";

type GrammarImpactProps = {
  grammar: ScoreFeedback;
};

const GrammarImpact = ({ grammar }: GrammarImpactProps) => {
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
            Grammar score: {grammar.score}/100
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="border-l-2 border-blue-500 pl-4">
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {grammar.feedback}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-700">
        <CheckCircle2 className="h-4 w-4" />
        {grammar.score >= 80
          ? "Overall readability is strong."
          : "Improving the issues above will make the resume easier to read."}
      </div>
    </section>
  );
};

export default GrammarImpact;
