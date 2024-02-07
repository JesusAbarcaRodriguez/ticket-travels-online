import { RootState } from "@/root/redux";

export const selectClient = (state: RootState) => state.clientStore.client;
