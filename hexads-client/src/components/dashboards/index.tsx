import React from "react";
import useConfig from "../../hooks/useConfig";
import AdvertiserDashboard from "./AdvertiserDashboard";
import ConsumerDashboard from "./ConsumerDashboard";
import PlatformOwnerDashboard from "./PlatformOwnerDashboard";

const DashboardComponent = () => {
  const config = useConfig();
  return (
    <>
      {config.user_type === "advertiser" && <AdvertiserDashboard />}
      {config.user_type === "platform_owner" && <PlatformOwnerDashboard />}
      {config.user_type === "consumer" && <ConsumerDashboard />}
    </>
  );
};

export default DashboardComponent;
