"use client"

import { CirclePlay, FileUp, Sparkles } from "lucide-react";
import Image from "next/image";

const uploadFile = () => {
  window.location.href = "/upload";
};

const viewDemo = () => {
  window.location.href = "/demo";
};

const Hero = () => {

  return (
    <section className="overflow-hidden bg-gray-100 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-800/20 px-4 py-2 text-xs font-medium text-blue-800 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Editorial-grade AI analysis</span>
          </div>
          {/* Heading */}
          <div>
            <h1 className="my-6 max-w-xl text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Improve Your Resume With AI in under 60 Seconds
            </h1>
            <p className="max-w-2xl text-base leading-7 text-gray-700 sm:text-lg lg:text-xl">
              Experience high-stakes reliability. Our executive-level AI parses,
              analyzes, and optimizes your career history against millions of
              successful data points, ensuring your content remains the focal
              point.
            </p>
          </div>
          {/* CTA  */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button 
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto"
              onClick={uploadFile}
            >
              <FileUp />
              Upload Resume
            </button>
            <button 
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-200 px-6 py-4 text-gray-800 transition-colors duration-200 hover:bg-gray-300 sm:w-auto"
              onClick={viewDemo}
            >
              <CirclePlay color="#5f49d8" />
              View Demo
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Strictly confidential. No credit card required.
          </p>
        </div>

        {/* Right Side */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="absolute left-0 top-8 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl sm:h-72 sm:w-72 lg:left-8 lg:top-10 lg:h-96 lg:w-96" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl sm:h-64 sm:w-64 lg:bottom-10 lg:right-8 lg:h-80 lg:w-80" />
          <Image
            src="/hero-img.png"
            alt="AI Resume Analysis Dashboard"
            width={650}
            height={500}
            priority
            className="relative h-auto w-full max-w-md drop-shadow-2xl transition-transform duration-300 hover:scale-105 sm:max-w-xl lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
