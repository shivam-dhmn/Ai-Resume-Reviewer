import ResumeUploadCard from "./ResumeUploadCard";
import ResumePreviewCard from "./ResumePreviewCard";

const UploadResume = () => {
  return (
    <section className="min-h-full px-6 py-8 lg:px-10">
      {/* Page Heading */}
      <div className="mx-auto mb-8 max-w-7xl text-center">
        <h1 className="text-3xl font-bold text-black">
          Upload Your Resume
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Securely upload your resume for AI-powered analysis and insights.
          We support PDF and DOCX formats.
        </p>
      </div>

      {/* Upload + Preview */}
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <ResumeUploadCard />

        <ResumePreviewCard />
      </div>
    </section>
  );
};

export default UploadResume;