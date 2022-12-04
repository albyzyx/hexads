import React, { useEffect } from "react";
import { VIEWS } from "../constants/Views";
import { createAdCampignContract } from "../helpers/HexadContractHelper";
import { useWallet } from "../hooks";
import useViews from "../hooks/useView";
import Loader from "./common/Loader";
import NavigationTabs from "./common/NavigationTabs";
import CreateCampaign from "./create-campaign";
import DashboardComponent from "./dashboards";
import GenerateAPIKey from "./dashboards/components/GenerateAPIKey";
import Table from "./dashboards/components/Table";
import HeaderComponent from "./header";
import SidebarComponent from "./Sidebar";

const Container = () => {
  const views = useViews();

  return (
    <section className="flex flex-col min-h-screen items-center justify-between bg-gray-100 pb-10">
      <section className="w-full h-full">
        <HeaderComponent />
        <main className="flex items-start w-full h-full">
          {/* <aside className="h-full w-1/5 bg-white">
          <SidebarComponent />
        </aside> */}
          <section className="flex items-start px-10 w-full py-5">
            {views.currentView === VIEWS.LOADING && <Loader />}
            {views.currentView === VIEWS.DASHBOARD && <DashboardComponent />}
            {views.currentView === VIEWS.CREATE_CAMPAIGN && <CreateCampaign />}
            {views.currentView === VIEWS.SHOW_CAMPAIGNS && <Table />}
            {views.currentView === VIEWS.GENERATE_API_KEY && <GenerateAPIKey />}
          </section>
        </main>
      </section>
      <footer className="">
        <NavigationTabs />
      </footer>
    </section>
  );
};

export default Container;
