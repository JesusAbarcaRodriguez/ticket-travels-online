import { RootState } from "@/root/redux";

export const selectRouteSelect = (state: RootState) => state.routeSelectStore.routeSelect;
