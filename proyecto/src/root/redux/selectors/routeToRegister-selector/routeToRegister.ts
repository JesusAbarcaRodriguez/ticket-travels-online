import { RootState } from "@/root/redux";

export const selectRouteToRegister = (state: RootState) => state.routeToRegisterStore.routeToRegister;
