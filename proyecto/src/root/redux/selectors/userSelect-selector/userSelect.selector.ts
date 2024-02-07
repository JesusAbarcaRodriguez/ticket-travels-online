import { RootState } from "@/root/redux";

export const selectUserSelect = (state: RootState) => state.userSelectStore.userSelect;
