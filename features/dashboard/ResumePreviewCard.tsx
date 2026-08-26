import { Eye, FileText } from "lucide-react";

const ResumePreviewCard = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <span className="text-xs font-medium text-slate-600">
          Document Preview
        </span>

        <Eye className="h-4 w-4 text-slate-400" />
      </div>

      {/* Empty Preview */}
      <div className="flex min-h-[280px] flex-col items-center justify-center px-6 text-center">
        <FileText className="mb-4 h-8 w-8 text-slate-300" />

        <p className="text-sm text-slate-300">
          Upload a document to see preview
        </p>
      </div>
    </div>
  );
};

export default ResumePreviewCard;