import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";


export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector;
