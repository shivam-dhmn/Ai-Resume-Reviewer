import { CloudUpload, Zap } from "lucide-react";

const ResumeUploadCard = () => {
  return (
    <div className="space-y-3">
      {/* Upload area */}
      <div className="flex  flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
          <CloudUpload className="h-6 w-6 text-blue-600" />
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          Drag & Drop PDF
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          or click to browse from your device
        </p>

        <span className="mt-4 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
          PDF only, max 5MB
        </span>
      </div>

      {/* Analysis button */}
      <button className=" rounded-lg flex w-full items-center justify-center gap-2 bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-600">
        Start AI Analysis
        <Zap className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ResumeUploadCard;