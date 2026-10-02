import {auth} from "@/lib/auth";
import { headers } from "next/headers";

import SettingsPage from "@/features/dashboard/settings/Settings";
import { prisma } from "@/lib/prisma";
import { getCurrentUsagePeriodStart } from "@/lib/usage";

export default async function Settings() {
  const session = await auth.api.getSession({
    headers: await headers(),
  }); 

  if (!session) {
    return null;
  }

  const monthlyAnalysisCount = await prisma.analysis.count({
    where: {
      createdAt: {
        gte: getCurrentUsagePeriodStart(),
      },
      resume: {
        userId: session.user.id,
      },
    },
  });

  return (
    <SettingsPage
      user={session.user}
      monthlyAnalysisCount={monthlyAnalysisCount}
    />
  );
}
