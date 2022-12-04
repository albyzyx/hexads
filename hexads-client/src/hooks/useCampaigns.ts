import { useEffect, useState } from "react";
import useToggle from "./useToggle";

const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<any>([]);

  const [trigger, triggerUpdate] = useToggle();

  useEffect(() => {
    fetchCampaigns();
  }, []); //eslint-disable-line

  useEffect(() => {
    fetchCampaigns();
  }, [trigger]); //eslint-disable-line

  const fetchCampaigns = () => {
    update([]);
  };

  const update = (campaigns: any) => {
    setCampaigns([...campaigns]);
  };

  return {
    campaigns: campaigns,
    triggerUpdate,
  };
};

export default useCampaigns;
