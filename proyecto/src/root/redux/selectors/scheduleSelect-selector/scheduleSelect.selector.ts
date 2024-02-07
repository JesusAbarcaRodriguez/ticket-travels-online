import { RootState } from "@/root/redux";

export const selectScheduleSelect = (state: RootState) => state.scheduleSelectStore.scheduleSelect;
