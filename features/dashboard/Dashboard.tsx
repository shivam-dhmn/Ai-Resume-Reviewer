const Dashboard = () => {
  return (
    <section className="min-h-screen p-6 bg-gray-100 text-black lg:p-8 ">
      {/* Top section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back, Alex!
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here&apos;s your latest career intelligence briefing.
        </p>
      </div>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left / Main area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upload Resume */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Upload your latest Resume
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Drag and drop your PDF or DOCX file here, or click to browse.
            </p>

            <button className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Select File
            </button>
          </div>

          {/* Recent Analyses */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Analyses
              </h2>

              <button className="text-sm text-blue-600 hover:underline">
                View All
              </button>
            </div>

            <div className="mt-6">Recent analyses will go here.</div>
          </div>
        </div>

        {/* Right / Stats area */}
        <div className="space-y-6">
          {/* Credits */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-medium text-slate-500">
              ANALYSIS CREDITS
            </p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              12
              <span className="text-sm font-normal text-slate-400"> / 20</span>
            </p>

            <div className="mt-4 h-2 rounded-full bg-slate-200">
              <div className="h-full w-[60%] rounded-full bg-blue-600" />
            </div>
          </div>

          {/* Average Score */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-medium text-slate-500">AVERAGE SCORE</p>

            <p className="mt-3 text-3xl font-bold text-slate-900">76</p>
          </div>

          {/* Pro Card */}
          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <h2 className="text-lg font-semibold">Unlock Pro Insights</h2>

            <p className="mt-2 text-sm text-slate-300">
              Get unlimited resume analyses and deeper career insights.
            </p>

            <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium hover:bg-blue-700">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
