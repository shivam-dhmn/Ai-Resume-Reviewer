"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SignupForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (error) {
  console.error(error);
  setError(error.message ?? JSON.stringify(error));
  return;
}

      router.push("/login");
    } catch (err) {
  console.error(err);

  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("Unknown error");
  }
}finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
    >
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900">ResumeAI</h2>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold text-slate-900">Create your account</h1>

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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="text-black w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* showing error  */}
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

      {/* Create Account Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Creating Account..." : "Create Account"}
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
    </form>
  );
};

export default SignupForm;
