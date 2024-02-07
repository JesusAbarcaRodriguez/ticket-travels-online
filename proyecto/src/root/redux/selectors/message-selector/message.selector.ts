import { RootState } from "@/root/redux";

export const selectMessage = (state: RootState) => state.messageStore.messageF;
