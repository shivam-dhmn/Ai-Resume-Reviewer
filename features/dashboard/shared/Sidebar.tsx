"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import {
  LayoutDashboard,
  Upload,
  History,
  Sparkles,
  Settings,
} from "lucide-react";

const sidebarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Upload Resume",
    href: "/upload",
    icon: Upload,
  },
  {
    label: "Analysis History",
    href: "/history",
    icon: History,
  },
  {
    label: "Career Insights",
    href: "/insights",
    icon: Sparkles,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const handleLogout = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
    },
  });
};



const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64  bg-white text-black p-4 justify-between flex flex-col border-r-2 border-gray-200">
      <nav className="space-y-2">
        <h1 className="text-3xl font-bold p-3 text-blue-700">Resume AI</h1>
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700 hover:bg-blue-50"
              }`}
            >
              <Icon className="h-5 w-5" />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={handleLogout}
       className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;
