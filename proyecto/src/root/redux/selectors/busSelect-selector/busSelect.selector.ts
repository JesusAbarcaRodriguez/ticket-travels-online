import { RootState } from "@/root/redux";

export const selectBusSelect = (state: RootState) => state.busSelectStore.busSelect;
