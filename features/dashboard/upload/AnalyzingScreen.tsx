"use client";

import { FileSearch, Loader2 } from "lucide-react";

const AnalyzingScreen = () => {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <FileSearch className="h-9 w-9 text-blue-600" />

        <span className="absolute inset-0 animate-ping rounded-full border border-blue-200" />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-slate-900">
        Analyzing your resume
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        Our AI is reviewing your resume for ATS compatibility, skills,
        experience, grammar, and improvement opportunities.
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm text-blue-600">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>This may take a few moments...</span>
      </div>
    </div>
  );
};

export default AnalyzingScreen;