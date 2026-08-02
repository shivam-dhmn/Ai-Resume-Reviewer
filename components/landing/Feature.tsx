import Image from "next/image";
import { ListChecks, Search, Sparkles } from "lucide-react";

export default function Feature() {
  return (
    <section id="features" className="bg-[#f8f8ff] px-3 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 shadow-sm">
        <Sparkles className="h-4 w-4 fill-blue-600 text-blue-600" />

        <span className="text-sm font-semibold text-blue-700">
          Powerful Resume Analysis Tools
        </span>
      </div>

      {/* Heading */}
      <h2 className="mx-auto max-w-5xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Everything You Need to Improve Your Resume
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-xl sm:leading-8">
        Advanced AI tools to analyze, optimize, and perfect your resume
        <br className="hidden sm:block" />
        for better opportunities.
      </p>

      {/* Feature cards */}
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 text-left md:grid-cols-3">
        <article className="rounded-[10px] border border-slate-200 bg-[#f0f3ff] p-5 shadow-none transition-transform duration-200 hover:-translate-y-1 md:col-span-2 md:h-[247px]">
          <div className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-white text-blue-700">
            <ListChecks className="h-4 w-4" />
          </div>
          <h3 className="mt-3 text-base font-semibold text-slate-900">Rigorous ATS Check</h3>
          <p className="mt-1 max-w-md text-[11px] leading-4 text-slate-600">
            Our parsing engine mirrors the exact logic used by enterprise Applicant Tracking Systems, ensuring flawless readability.
          </p>
          <div className="relative mt-[18px] h-20 overflow-hidden rounded-md border border-slate-300 bg-white">
            <Image
              src="/hero-img.png"
              alt="Resume analysis preview"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center opacity-75"
            />
          </div>
        </article>

        <article className="flex min-h-72 flex-col rounded-[10px] border border-slate-200 bg-[#f0f3ff] p-5 shadow-none transition-transform duration-200 hover:-translate-y-1 md:h-[247px] md:min-h-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-white text-blue-700">
            <Search className="h-4 w-4" />
          </div>
          <h3 className="mt-3 text-base font-semibold text-slate-900">Keyword Optimization</h3>
          <p className="mt-1 max-w-sm text-[11px] leading-4 text-slate-600">
            Intelligently map your experience to target job descriptions.
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-8">
            {['Leadership', 'Strategy', 'Analytics'].map((tag) => (
              <span key={tag} className="rounded-full bg-[#dce6ff] px-2.5 py-0.5 text-[9px] font-medium text-blue-900">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>

    </section>
  );
}
