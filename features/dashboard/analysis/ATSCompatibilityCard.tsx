import { CheckCircle2 } from "lucide-react";

const ATSCompatibilityCard = () => {
  const atsScore = 92;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            ATS Compatibility
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Your resume is highly compatible with applicant tracking systems.
          </p>
        </div>

        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          High Match
        </span>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            ATS compatibility
          </span>

          <span className="text-sm font-semibold text-slate-700">
            {atsScore}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: `${atsScore}%` }}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          Formatting
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          Keywords
        </div>
      </div>
    </div>
  );
};

export default ATSCompatibilityCard;