import { ArrowUp, Target } from "lucide-react";

type PriorityImprovementsProps = {
  improvements: string[];
};

const PriorityImprovements = ({ improvements }: PriorityImprovementsProps) => {

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
          <Target className="h-4 w-4 text-blue-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Top Priority Improvements
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Focus on these changes first for the biggest impact.
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {improvements.map((improvement, index) => (
          <div
            key={improvement}
            className="flex gap-3 rounded-lg bg-slate-50 p-3"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
              {index + 1}
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-slate-800">
                {improvement}
                {index === 0 && (
                  <ArrowUp className="h-3.5 w-3.5 text-blue-600" />
                )}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriorityImprovements;
