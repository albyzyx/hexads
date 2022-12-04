import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const PlatformOwnerDashboard = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col gap-5">
      <Hero />
      <Stats />
    </section>
  );
};

export default PlatformOwnerDashboard;
