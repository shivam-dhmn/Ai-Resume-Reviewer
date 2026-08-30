import ResumeUploadCard from "./ResumeUploadCard";
import ResumePreviewCard from "./ResumePreviewCard";

const UploadResume = () => {
  return (
    <section className="min-h-full px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      {/* Page Heading */}
      <div className="mx-auto mb-8 max-w-7xl text-center">
        <h1 className="text-2xl font-bold text-black sm:text-3xl">
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
