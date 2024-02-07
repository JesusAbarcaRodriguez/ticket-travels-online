import { RootState } from "@/root/redux";

export const selectRoutes = (state: RootState) => state.routeStore.routes;
