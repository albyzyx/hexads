import { createSlice } from "@reduxjs/toolkit";
import { VIEWS } from "../constants/Views";
import { CREATE_CAMPAIGN_VIEWS } from "../constants/Views";

interface ViewState {
  view: VIEWS;
  from: VIEWS | CREATE_CAMPAIGN_VIEWS;
  campaign: CREATE_CAMPAIGN_VIEWS;
}

let INIT_STATE: ViewState = {
  view: VIEWS.LOADING,
  from: VIEWS.LOADING,
  campaign: CREATE_CAMPAIGN_VIEWS.LEVEL1,
};

const viewSlice = createSlice({
  name: "views",
  initialState: INIT_STATE,
  reducers: {
    updateViewState: (state, action) => {
      state.view = action.payload.to;
      state.from = action.payload.from;
    },
    updateCreateCampaignView: (state, action) => {
      state.campaign = action.payload.campaign;
      state.from = action.payload.from;
    },
  },
});

export const { updateViewState, updateCreateCampaignView } = viewSlice.actions;

export const selectViewState = ({ views }: { views: ViewState }) => views;

export default viewSlice.reducer;
