import Sidebar from "@/features/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* This stays on every dashboard page */}
      <Sidebar />

      {/* This changes */}
      <main className="min-w-0 flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}