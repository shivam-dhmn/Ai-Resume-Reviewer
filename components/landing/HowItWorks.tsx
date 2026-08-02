const steps = [
  {
    number: "1",
    title: "Upload Securely",
    description:
      "Drop your PDF or DOCX. Our secure enclave ensures your data remains strictly confidential.",
    active: false,
  },
  {
    number: "2",
    title: "AI Processing",
    description:
      "The system cross-references your profile against millions of successful executive data points.",
    active: true,
  },
  {
    number: "3",
    title: "Review & Export",
    description:
      "Apply the editorial-grade suggestions and export an ATS-optimized masterpiece.",
    active: false,
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 py-24 bg-gray-100">
      {/* Heading */}

      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Intelligence in Three Steps
        </h2>
      </div>

      {/* Steps */}

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center"
          >
            {/* Circle */}

            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full border text-3xl font-bold transition-all duration-300 ${
                step.active
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                  : "border-blue-100 bg-blue-50 text-blue-700"
              }`}
            >
              {step.number}
            </div>

            {/* Title */}

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              {step.title}
            </h3>

            {/* Description */}

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;