import {
  clearConfigState,
  selectConfigState,
  updateConfigState,
} from "../redux/ConfigSlice";
import { useAppSelector, useAppDispatch } from "./index";

const useConfig = () => {
  const dispatch = useAppDispatch();

  const config = useAppSelector(selectConfigState);

  const clear = () => {
    dispatch(clearConfigState());
  };

  const update = ({ user_type }: { user_type: string }) => {
    dispatch(updateConfigState({ user_type: user_type }));
  };

  return {
    user_type: config.user_type,
    clear,
    update,
  };
};

export default useConfig;
