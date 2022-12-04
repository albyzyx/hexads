import React from "react";
import { CREATE_CAMPAIGN_VIEWS, VIEWS } from "../../../constants/Views";
import useConfig from "../../../hooks/useConfig";
import useMetrics from "../../../hooks/useMetrics";
import useViews from "../../../hooks/useView";
import Button from "../../common/Button";

const Hero = () => {
  const views = useViews();

  const config = useConfig();

  const metrics = useMetrics();

  return (
    <section className="w-full flex items-center gap-3 h-[260px]">
      <section className="w-3/4 px-12 flex items-center justify-between rounded-3xl bg-white border border-gray-200 shadow-xl">
        <section className="flex flex-col items-start justify-center gap-3">
          <span className="text-black text-6xl font-bold">Hi there!</span>
          <span className="text-gray-600 text-lg font-medium">
            {config.user_type === "advertiser"
              ? "Kickstart your business with hazzle free ads and marketing."
              : "Create your API Key to get Started."}
          </span>
          <Button
            type="button"
            onClick={() => {
              if (config.user_type === "advertiser") {
                views.goTo(VIEWS.CREATE_CAMPAIGN);
                views.updateCampaignView(CREATE_CAMPAIGN_VIEWS.LEVEL1);
              } else {
                views.goTo(VIEWS.GENERATE_API_KEY);
              }
            }}
          >
            {config.user_type === "advertiser"
              ? "Create Campaign"
              : "Create Your API Key"}
          </Button>
        </section>
        <img
          src={"/onboarding.png"}
          alt=""
          className=" object-contain w-64 h-64"
        />
      </section>
      <section className="w-1/4 rounded-3xl border border-gray-200 shadow-xl bg-white h-full p-6 flex items-start flex-col gap-2">
        <span className="text-xl font-semibold">Total Revenue</span>
        <span className="text-4xl font-bold text-yellow-400">
          {metrics.revenue}
        </span>
      </section>
    </section>
  );
};

export default Hero;
