import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Sidebar from "@/features/dashboard/shared/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 lg:flex lg:h-screen lg:overflow-hidden">
      {/* This stays on every dashboard page */}
      <Sidebar />

      {/* This changes */}
      <main className="min-w-0 flex-1 lg:overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
