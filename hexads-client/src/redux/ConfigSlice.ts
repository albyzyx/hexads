import { createSlice } from "@reduxjs/toolkit";

interface ConfigState {
  user_type: "advertiser" | "platform_owner" | "consumer" | "none";
}

let INIT_STATE: ConfigState = {
  user_type: "advertiser",
};

const configSlice = createSlice({
  name: "config",
  initialState: INIT_STATE,
  reducers: {
    updateConfigState: (state, action) => {
      state.user_type = action.payload.user_type;
    },
    clearConfigState: (state) => {
      state.user_type = "none";
    },
  },
});

export const { updateConfigState, clearConfigState } = configSlice.actions;

export const selectConfigState = ({ config }: { config: ConfigState }) =>
  config;

export default configSlice.reducer;
