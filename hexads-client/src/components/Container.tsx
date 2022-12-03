import React from "react";
import { VIEWS } from "../constants/Views";
import useViews from "../hooks/useView";
import Loader from "./common/Loader";
import CreateCampaign from "./create-campaign";
import DashboardComponent from "./dashboards";
import HeaderComponent from "./header";
import SidebarComponent from "./Sidebar";

const Container = () => {
  const views = useViews();
  return (
    <section className="flex flex-col items-center gap-4 h-screen">
      <HeaderComponent />
      <main className="flex items-center gap-6 w-full h-full">
        <SidebarComponent />
        <section className="flex items-center px-10 w-full">
          {views.currentView === VIEWS.LOADING && <Loader />}
          {views.currentView === VIEWS.DASHBOARD && <DashboardComponent />}
          {views.currentView === VIEWS.CREATE_CAMPAIGN && <CreateCampaign />}
        </section>
      </main>
    </section>
  );
};

export default Container;
