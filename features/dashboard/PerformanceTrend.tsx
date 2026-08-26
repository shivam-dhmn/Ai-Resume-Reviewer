"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const scoreHistory = [
  { date: "Sep 02", score: 68 },
  { date: "Sep 18", score: 74 },
  { date: "Oct 02", score: 79 },
  { date: "Oct 15", score: 82 },
  { date: "Oct 24", score: 86 },
];

const PerformanceTrend = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 mt-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Resume Performance
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track how your resume score has changed over time.
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={scoreHistory}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceTrend;