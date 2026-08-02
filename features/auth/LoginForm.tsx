import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">

      {/* Logo */}

      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          ResumeAI
        </h2>
      </div>

      {/* Heading */}

      <h1 className="text-3xl font-bold text-slate-900">
        Welcome back
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        Access your AI-powered resume review dashboard.
      </p>
     
      {/* Divider */}

      {/* Email */}

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>

        <input
          type="email"
          placeholder="name@example.com"
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Password */}

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">
            Password
          </label>

          <Link
            href="#"
            className="text-xs text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Login Button */}

      <button
        className="mt-6 w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
      >
        Sign In
      </button>

      {/* Footer */}

      <p className="mt-6 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-semibold text-blue-600 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;