import {auth} from "@/lib/auth";
import { headers } from "next/headers";

import SettingsPage from "@/features/dashboard/settings/Settings";

export default async function Settings() {
  const session = await auth.api.getSession({
    headers: await headers(),
  }); 

  if (!session) {
    return null;
  }

  return <SettingsPage user={session.user} />;
}