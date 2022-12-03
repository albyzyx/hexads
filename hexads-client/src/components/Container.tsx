import React from "react";
import HeaderComponent from "./header";
import SidebarComponent from "./Sidebar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col items-center gap-12">
      <HeaderComponent />
      <main className="flex items-center gap-6 w-full">
        <SidebarComponent />
        {children}
      </main>
    </section>
  );
};

export default Container;
