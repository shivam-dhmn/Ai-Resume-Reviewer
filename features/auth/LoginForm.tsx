"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        console.error(error);
        setError(error.message ?? "Failed to sign in.");
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl"
    >
      {/* Logo */}

      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
          <ArrowRight className="h-5 w-5 text-white" />
        </div>

        <h2 className="text-lg font-semibold text-slate-900">ResumeAI</h2>
      </div>

      {/* Heading */}

      <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border text-black border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Password */}

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">Password</label>

          <Link href="#" className="text-xs text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black w-full rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Error Handling  */}
      {error && 
      <p className="mt-4 text-sm text-red-500">
        {error}
        </p>
        }

      {/* Login Button */}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
      >
        {loading ? "Signing In..." : "Sign In"}
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
    </form>
  );
};

export default LoginForm;
