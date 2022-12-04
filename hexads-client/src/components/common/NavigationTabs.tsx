import React from "react";
import { VIEWS } from "../../constants/Views";
import useConfig from "../../hooks/useConfig";
import useViews from "../../hooks/useView";
import { MdSwapCalls, MdSpaceDashboard, MdCampaign } from "react-icons/md";

const NavigationTabs = () => {
  const views = useViews();
  const config = useConfig();

  return (
    <section className="text-accent flex">
      <button
        className={`px-6 py-3 text-lg font-medium hover:opacity-75 border rounded-tr-none rounded-br-none border-collapse rounded-xl shadow-sm bg-white flex items-center gap-2`}
        onClick={() => {
          config.update("none");
        }}>
        <MdSwapCalls className="w-7 h-7" />
        Account
      </button>
      <button
        className={`px-6 py-3 text-lg font-medium hover:opacity-75 border border-collapse border-l-0 border-r-0 shadow-sm bg-white flex items-center gap-2`}
        onClick={() => views.goTo(VIEWS.DASHBOARD)}>
        <MdSpaceDashboard className="w-5 h-5" />
        Dashboard
      </button>
      <button
        className={`px-6 py-3 text-lg font-medium hover:opacity-75 border rounded-tl-none rounded-bl-none border-collapse rounded-xl shadow-sm bg-white flex items-center gap-2`}
        onClick={() => views.goTo(VIEWS.SHOW_CAMPAIGNS)}>
        <MdCampaign className="w-7 h-7" />
        Campaigns
      </button>
    </section>
  );
};

export default NavigationTabs;
