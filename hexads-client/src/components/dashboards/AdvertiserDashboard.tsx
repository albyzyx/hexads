import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const AdvertiserDashboard = () => {
  const data = [
    {
      label: "Total Audience",
      value: "2.9K",
    },
    {
      label: "Total Impressions",
      value: "100K",
    },
    {
      label: "Total Engagement",
      value: "50K",
    },
  ];

  const heroData = {
    label: "Total Spendings",
    value: "5K XATs",
  };

  return (
    <section className="w-full flex items-center justify-center flex-col gap-5">
      <Hero />
      <Stats />
    </section>
  );
};

export default AdvertiserDashboard;
