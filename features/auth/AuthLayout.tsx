import { ReactNode } from "react";
import AuthIllustration from "./AuthIllustration";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-5">

        {/* Left Side */}
        <div className="flex items-center justify-center px-6 py-10 lg:col-span-2">
          {children}
        </div>

        {/* Right Side */}
        <div className="hidden lg:col-span-3 lg:flex lg:items-center lg:justify-center bg-blue-600 rounded-l-[40px]">

          <AuthIllustration />

        </div>

      </div>
    </main>
  );
};

export default AuthLayout;