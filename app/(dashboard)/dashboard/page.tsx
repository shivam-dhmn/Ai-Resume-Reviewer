import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Dashboard from "@/features/dashboard/overview/Dashboard";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
  }

  return <Dashboard user={session.user} />;
}