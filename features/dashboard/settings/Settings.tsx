"use client";

import { useState } from "react";
import {
  UserRound,
  Bell,
  Palette,
  Camera,
  CreditCard,
  Sparkles,
  Trash2,
} from "lucide-react";

type SettingsProps = {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
};

const Settings = ({ user }: SettingsProps) => {
  const [activeTab, setActiveTab] = useState("Account");

  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const settingsTabs = [
    {
      label: "Account",
      icon: UserRound,
    },
    {
      label: "Notifications",
      icon: Bell,
    },
    {
      label: "Theme",
      icon: Palette,
    },
  ];

  return (
    <section className="min-h-full bg-slate-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Settings
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
          {/* Settings navigation */}
          <aside>
            <nav className="mobile-scrollbar-hidden flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.label;

                return (
                  <button
                    key={tab.label}
                    type="button"
                    onClick={() => setActiveTab(tab.label)}
                    className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-left text-xs transition lg:w-full ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-5">
            {activeTab === "Account" && (
              <>
                {/* Profile Details */}
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h2 className="text-sm font-semibold text-slate-900">
                      Profile Details
                    </h2>
                  </div>

                  <div className="mt-5 flex flex-col gap-6 sm:flex-row">
                    {/* Avatar */}
                    <div className="shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-700">
                        {initials}
                      </div>

                      <button
                        type="button"
                        className="mt-2 text-[11px] font-medium text-blue-600 hover:underline"
                      >
                        <Camera className="mr-1 inline h-3 w-3" />
                        Change Avatar
                      </button>
                    </div>

                    {/* Fields */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-slate-500">
                          Full Name
                        </label>

                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-slate-500">
                          Email Address
                        </label>

                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div className="flex justify-stretch sm:justify-end">
                        <button
                          type="button"
                          className="w-full rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-700 sm:w-auto"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plan + Usage */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Current Plan */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-sm font-semibold text-slate-900">
                          Current Plan
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                          Professional
                        </p>
                      </div>

                      <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-600">
                        PRO
                      </span>
                    </div>

                    <p className="mt-4 text-[11px] text-slate-500">
                      Your Professional plan renews on{" "}
                      <span className="font-medium text-slate-700">
                        Oct 24, 2024
                      </span>
                      .
                    </p>

                    <button
                      type="button"
                      className="mt-4 w-full rounded-md border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                    >
                      <CreditCard className="mr-1.5 inline h-3.5 w-3.5" />
                      Manage Billing
                    </button>

                    <button
                      type="button"
                      className="mt-3 w-full text-xs font-medium text-blue-600 hover:underline"
                    >
                      Upgrade Plan
                    </button>
                  </div>

                  {/* Monthly Usage */}
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-sm font-semibold text-slate-900">
                          Monthly AI Usage
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                          Current billing period
                        </p>
                      </div>

                      <Sparkles className="h-4 w-4 text-blue-500" />
                    </div>

                    {/* Resume analyses */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-600">
                          Resume Analyses
                        </span>

                        <span className="text-[11px] font-semibold text-slate-700">
                          12 / 20
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                        <div className="h-full w-[60%] rounded-full bg-blue-600" />
                      </div>
                    </div>

                    {/* Cover letters */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-600">
                          Cover Letters
                        </span>

                        <span className="text-[11px] font-semibold text-slate-700">
                          4 / 5
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                        <div className="h-full w-[80%] rounded-full bg-blue-600" />
                      </div>
                    </div>

                    <p className="mt-4 text-[10px] leading-4 text-slate-400">
                      Usage limits reset at the start of every billing period.
                    </p>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="rounded-xl border border-red-200 bg-white p-5">
                  <h2 className="text-sm font-semibold text-red-600">
                    Danger Zone
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Once you delete your account, there is no going back.
                    Please be certain.
                  </p>

                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-md border border-red-300 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete Account
                  </button>
                </div>
              </>
            )}

            {activeTab === "Notifications" && (
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-sm font-semibold text-slate-900">
                  Notifications
                </h2>

                <p className="mt-2 text-xs text-slate-500">
                  Notification preferences will be available here.
                </p>
              </div>
            )}

            {activeTab === "Theme" && (
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-sm font-semibold text-slate-900">
                  Theme
                </h2>

                <p className="mt-2 text-xs text-slate-500">
                  Theme preferences will be available here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
