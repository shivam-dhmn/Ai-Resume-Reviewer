import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SignupForm = () => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          ResumeAI
        </h2>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-slate-900">
        Create your account
      </h1>

      <p className="mt-3 text-slate-500">
        Start improving your resume with AI-powered insights.
      </p>

      {/* Full Name */}
      <div className="mt-8">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Full Name
        </label>

        <input
          type="text"
          placeholder="John Doe"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Email */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>

        <input
          type="email"
          placeholder="name@example.com"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Password */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Confirm Password */}
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Create Account Button */}
      <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
        Create Account
      </button>

      {/* Footer */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Sign In
        </Link>
      </p>

    </div>
  );
};

export default SignupForm;