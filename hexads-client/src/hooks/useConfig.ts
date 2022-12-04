import { useEffect } from "react";
import { VIEWS } from "../constants/Views";
import {
  clearConfigState,
  selectConfigState,
  updateConfigState,
} from "../redux/ConfigSlice";
import { useAppSelector, useAppDispatch } from "./index";
import useViews from "./useView";

const useConfig = () => {
  const dispatch = useAppDispatch();

  const views = useViews();

  const config = useAppSelector(selectConfigState);

  useEffect(() => {
    if (localStorage.getItem("user_type"))
      update(localStorage.getItem("user_type") as string);
  }, []); //eslint-disable-line

  const clear = () => {
    dispatch(clearConfigState());
  };

  const update = (user_type: string) => {
    dispatch(updateConfigState({ user_type: user_type }));
    views.goTo(VIEWS.DASHBOARD);
  };

  return {
    user_type: config.user_type,
    clear,
    update,
  };
};

export default useConfig;
