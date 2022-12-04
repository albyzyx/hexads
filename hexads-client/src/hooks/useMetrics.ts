import { useEffect, useState } from "react";
import useConfig from "./useConfig";
import useToggle from "./useToggle";

const useMetrics = () => {
  const [impressions, setImpressions] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [audience, setAudience] = useState(0);
  const [engagement, setEngagement] = useState(0);

  const [trigger, triggerUpdate] = useToggle();

  const config = useConfig();

  useEffect(() => {
    fetchMetrics();
  }, []); //eslint-disable-line

  useEffect(() => {
    fetchMetrics();
  }, [trigger]); //eslint-disable-line

  const fetchMetrics = async () => {
    if (config.user_type === "advertiser") {
      //call the advertiser metrics function and then call the udpate with the values
      update(0, 0, 0, 0);
    } else if (config.user_type === "platform_owner") {
      // call the platform owner metrics function and then call the update the values
      update(0, 0, 0, 0);
    }
  };

  const update = (i: number, r: number, a: number, e: number) => {
    setImpressions(i);
    setRevenue(r);
    setAudience(a);
    setEngagement(a);
  };

  return { impressions, revenue, audience, engagement, triggerUpdate };
};

export default useMetrics;
