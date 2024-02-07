import { RootState } from "@/root/redux";

export const selectLogin = (state: RootState) => state.authStore.isAuthenticated;
