import React from "react";
import useMetrics from "../../../hooks/useMetrics";

const Stats = () => {
  const metrics = useMetrics();

  return (
    <section className="flex items-center justify-center gap-3 w-full h-[168px]">
      <section className="w-1/3 rounded-3xl border border-gray-200 shadow-xl bg-white h-full p-6 flex items-start flex-col gap-2">
        <span className="text-xl font-semibold">Total Audience</span>
        <span className="text-4xl font-bold text-teal-400">
          {metrics.audience}
        </span>
      </section>
      <section className="w-1/3 rounded-3xl border border-gray-200 shadow-xl bg-white h-full p-6 flex items-start flex-col gap-2">
        <span className="text-xl font-semibold">Total Impressions</span>
        <span className="text-4xl font-bold text-accent">
          {metrics.impressions}
        </span>
      </section>
      <section className="w-1/3 rounded-3xl border border-gray-200 shadow-xl bg-white h-full p-6 flex items-start flex-col gap-2">
        <span className="text-xl font-semibold">Total Engagement</span>
        <span className="text-4xl font-bold text-orange-600">
          {metrics.engagement}
        </span>
      </section>
    </section>
  );
};

export default Stats;
