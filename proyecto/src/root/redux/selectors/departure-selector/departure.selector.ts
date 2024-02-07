import { RootState } from "@/root/redux";

export const selectDeparture = (state: RootState) => state.departureStore.departure;
