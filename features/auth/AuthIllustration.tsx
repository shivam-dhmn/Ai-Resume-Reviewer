import { Sparkles, FileText, CheckCircle2 } from "lucide-react";

const AuthIllustration = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-l-[40px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-10">

      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative flex max-w-md flex-col items-center text-center">

        {/* Badge */}

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-sm font-medium text-white">
            AI Resume Analysis
          </span>
        </div>

        {/* Resume Card */}

        <div className="w-full rounded-3xl bg-white p-8 shadow-2xl">

          <div className="mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" />

            <div className="text-left">
              <h3 className="font-semibold text-slate-900">
                Resume Analysis
              </h3>

              <p className="text-sm text-slate-500">
                Editorial-grade AI
              </p>
            </div>
          </div>

          {/* Score */}

          <div className="mb-6">
            <p className="text-5xl font-bold text-blue-600">
              94
            </p>

            <p className="text-slate-500">
              ATS Score
            </p>
          </div>

          {/* Progress */}

          <div className="mb-6 h-2 rounded-full bg-slate-200">
            <div className="h-full w-[94%] rounded-full bg-blue-600" />
          </div>

          {/* Checklist */}

          <div className="space-y-3">

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-sm text-slate-600">
                ATS Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-sm text-slate-600">
                Strong Keywords
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span className="text-sm text-slate-600">
                Better Readability
              </span>
            </div>

          </div>

        </div>

        {/* Floating Card */}

        <div className="absolute -bottom-6 right-0 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md shadow-lg">
          <p className="text-sm text-white">
            <span className="font-semibold">
              +18%
            </span>{" "}
            Interview Success
          </p>
        </div>

      </div>
    </div>
  );
};

export default AuthIllustration;