import { RootState } from "@/root/redux";

export const selectLoadingState = (state: RootState) => state.loadingStore.isLoading;
