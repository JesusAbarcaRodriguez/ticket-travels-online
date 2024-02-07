import { RootState } from "@/root/redux";

export const selectSchedules = (state: RootState) => state.scheduleStore.schedules;
