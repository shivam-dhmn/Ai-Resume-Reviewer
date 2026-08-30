import { CircleCheck } from "lucide-react";

const OverallScoreCard = () => {
  const score = 85;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Overall Score
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Your resume&apos;s overall performance
          </p>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-blue-100">
          <span className="text-xl font-bold text-blue-600">{score}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
        <CircleCheck className="h-4 w-4" />
        Strong overall resume quality
      </div>

      <p className="mt-2 text-xs text-slate-400">
        Your resume has a solid foundation and is close to being highly competitive.
      </p>
    </div>
  );
};

export default OverallScoreCard;
