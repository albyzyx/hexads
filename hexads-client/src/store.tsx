import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import walletReducer from "./redux/WalletSlice";
import viewsReducer from "./redux/ViewsSlice";
import configReducer from "./redux/ConfigSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    views: viewsReducer,
    config: configReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
