import { RootState } from "@/root/redux";

export const selectUsers = (state: RootState) => state.userStore.users;
