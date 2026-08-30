"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Analysis = {
  id: string;
  date: string;
  document: string;
  role: string;
  score: number;
};

const analyses: Analysis[] = [
  {
    id: "1",
    date: "Oct 24, 2024",
    document: "Alex_Rivera_Resume_TechLead.pdf",
    role: "Senior Product Manager",
    score: 86,
  },
  {
    id: "2",
    date: "Oct 15, 2024",
    document: "Rivera_SoftwareEng_2024.docx",
    role: "Software Engineer",
    score: 64,
  },
  {
    id: "3",
    date: "Sep 02, 2024",
    document: "Old_Resume_Design_v2.pdf",
    role: "Product Designer",
    score: 35,
  },
];

const AnalysisHistory = () => {
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredAnalyses = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return analyses;
    }

    return analyses.filter(
      (analysis) =>
        analysis.document.toLowerCase().includes(value) ||
        analysis.role.toLowerCase().includes(value) ||
        analysis.date.toLowerCase().includes(value)
    );
  }, [search]);

  const getScoreStyle = (score: number) => {
    if (score >= 80) {
      return "border-green-200 bg-green-50 text-green-600";
    }

    if (score >= 60) {
      return "border-amber-200 bg-amber-50 text-amber-600";
    }

    return "border-red-200 bg-red-50 text-red-500";
  };

  return (
    <section className="min-h-full px-4 py-6 sm:px-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Analysis History
            </h1>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Review and track your past resume evaluations.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-auto">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents..."
                className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-700 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 sm:w-56"
              />
            </div>

            <button
              type="button"
              onClick={() => setFilterOpen((prev) => !prev)}
              className={`flex h-9 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs transition sm:w-auto ${
                filterOpen
                  ? "border-blue-200 bg-blue-50 text-blue-600"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filter
            </button>
          </div>
        </div>

        {/* Optional filter panel */}
        {filterOpen && (
          <div className="mb-4 rounded-lg border border-slate-200 bg-white p-4">
            <p className="text-xs font-medium text-slate-600">
              Filters will be connected later.
            </p>
          </div>
        )}

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="mobile-scrollbar-hidden overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Date
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Document Name
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Score
                  </th>

                  <th className="px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredAnalyses.map((analysis) => (
                  <tr
                    key={analysis.id}
                    className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/70"
                  >
                    {/* Date */}
                    <td className="px-4 py-4 text-xs text-slate-600">
                      {analysis.date}
                    </td>

                    {/* Document */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>

                        <div>
                          <p className="max-w-[300px] truncate text-xs font-medium text-slate-700">
                            {analysis.document}
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-400">
                            Target Role: {analysis.role}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Score */}
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium ${getScoreStyle(
                          analysis.score
                        )}`}
                      >
                        {analysis.score}/100
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-4 text-right">
                      <Link
                        href={`/dashboard/analysis/${analysis.id}`}
                        className="text-xs font-medium text-blue-600 hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}

                {filteredAnalyses.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-12 text-center text-sm text-slate-400"
                    >
                      No analyses found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Bottom pagination */}
          <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] text-slate-400">
              Showing {filteredAnalyses.length} of {analyses.length} entries
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled
                className="flex items-center gap-1 rounded border border-slate-200 px-2.5 py-1 text-[10px] text-slate-400 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-3 w-3" />
                Prev
              </button>

              <button
                type="button"
                className="flex items-center gap-1 rounded border border-slate-200 px-2.5 py-1 text-[10px] text-slate-600 hover:bg-slate-50"
              >
                Next
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-200 pt-5">
          <div className="flex flex-col gap-3 text-[9px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2024 CareerMaster AI. AI-led professional tools.</p>

            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-slate-600">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-slate-600">
                Terms of Service
              </Link>

              <Link href="#" className="hover:text-slate-600">
                Security
              </Link>

              <Link href="#" className="hover:text-slate-600">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default AnalysisHistory;
