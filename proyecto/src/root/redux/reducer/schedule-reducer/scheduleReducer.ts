import { Schedule } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScheduleState {
    schedules: Schedule[];
}

export const ScheduleInitialState: ScheduleState = {
    schedules: [],
};

type ScheduleAction = {
    type: string;
    Schedule?: ScheduleState;
};
export type scheduleDispatchType = (args: ScheduleAction) => ScheduleAction;

export const scheduleSlice = createSlice({
    name: "schedule",

    initialState: ScheduleInitialState,

    reducers: {
        setSchedules: (state, action: PayloadAction<Schedule>) => {
            const schedule = action.payload as Schedule;
            return {
                ...state,
                schedules: [...state.schedules, schedule],
            };
        },
    },
});

export const { setSchedules } = scheduleSlice.actions;

export const scheduleReducer = scheduleSlice.reducer;
