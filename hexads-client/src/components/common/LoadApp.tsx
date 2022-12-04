import React from "react";
import { VIEWS } from "../../constants/Views";
import useConfig from "../../hooks/useConfig";
import useViews from "../../hooks/useView";

const LoadApp = () => {
  const config = useConfig();
  const views = useViews();

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <span className="text-6xl font-bold text-black">Welcome to HexAds.</span>
      <span className="text-3xl font-semibold text-gray-600">
        To continue, select a category!
      </span>
      <section className="flex items-center gap-3">
        <button
          className="px-6 py-3 text-lg font-semibold hover:opacity-75 border rounded-xl shadow-sm text-gray-700 bg-teal-500"
          onClick={() => {
            config.update("advertiser");
            views.goTo(VIEWS.DASHBOARD);
          }}>
          Advertiser
        </button>
        <button
          className="px-6 py-3 text-lg font-semibold hover:opacity-75 border rounded-xl shadow-sm text-white bg-border"
          onClick={() => {
            config.update("platform_owner");
            views.goTo(VIEWS.DASHBOARD);
          }}>
          Platform Owner
        </button>
        {/* <button className="px-6 py-3 text-lg font-semibold hover:opacity-75 border rounded-xl shadow-sm text-white bg-border" onClick={() => {
          config.update("consumer")
           views.goTo(VIEWS.DASHBOARD)
        }}>
          Consumer
        </button> */}
      </section>
    </section>
  );
};

export default LoadApp;
