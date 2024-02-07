import { RootState } from "@/root/redux";

export const selectReportDepartureSelect = (state: RootState) => state.reportDepartureStore.reportDeparture;
