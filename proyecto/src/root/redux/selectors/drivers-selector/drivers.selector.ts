import { RootState } from "@/root/redux";

export const selectDrivers = (state: RootState) => state.drivers.drivers;