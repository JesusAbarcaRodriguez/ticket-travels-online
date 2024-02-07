import { RootState } from "@/root/redux";

export const selectBuses = (state: RootState) => state.busStore.bus;
