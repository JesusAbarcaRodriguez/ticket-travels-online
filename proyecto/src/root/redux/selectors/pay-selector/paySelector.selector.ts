import { RootState } from "@/root/redux";

export const selectPays = (state: RootState) => state.payStore.pays;
