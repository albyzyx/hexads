import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { CREATE_CAMPAIGN_VIEWS, VIEWS } from "../constants/Views";
import {
  selectViewState,
  updateCreateCampaignView,
  updateViewState,
} from "../redux/ViewsSlice";

const useViews = () => {
  const dispatch = useAppDispatch();

  const views = useAppSelector(selectViewState);

  useEffect(() => {}, [views.view]);

  const goTo = (to: VIEWS) => {
    dispatch(updateViewState({ from: views.view, to }));
  };

  const updateCampaignView = (campaign: VIEWS | CREATE_CAMPAIGN_VIEWS) => {
    dispatch(updateCreateCampaignView({ from: views.campaign, campaign }));
  };

  return {
    currentView: views.view,
    from: views.from,
    campaign: views.campaign,
    goTo,
    updateCampaignView,
  };
};

export default useViews;
