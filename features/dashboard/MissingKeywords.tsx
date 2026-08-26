import { Search, AlertCircle } from "lucide-react";

const MissingKeywords = () => {
  const keywords = [
    "A/B Testing",
    "SQL",
    "Experimentation",
    "Metrics & KPIs",
    "Data Storytelling",
    "Product Analytics",
  ];

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50">
          <Search className="h-4 w-4 text-amber-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Missing Keywords
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            These keywords frequently appear in your target role but have
            limited or no evidence in your resume.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700"
          >
            {keyword}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

        <p className="text-xs leading-5 text-slate-500">
          Add only keywords that genuinely match your experience. Don't stuff
          your resume with terms just to satisfy an ATS.
        </p>
      </div>
    </section>
  );
};

export default MissingKeywords;