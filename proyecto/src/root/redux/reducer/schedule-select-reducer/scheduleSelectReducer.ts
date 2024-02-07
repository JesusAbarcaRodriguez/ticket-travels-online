import { Schedule } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScheduleSelectState {
    scheduleSelect: Schedule;
}

export const ScheduleSelectInitialState: ScheduleSelectState = {
    scheduleSelect: {} as Schedule,
};

type ScheduleSelectAction = {
    type: string;
    ScheduleSelect?: ScheduleSelectState;
};
export type scheduleSelectDispatchType = (args: ScheduleSelectAction) => ScheduleSelectAction;

export const scheduleSelectSlice = createSlice({
    name: "scheduleSelect",

    initialState: ScheduleSelectInitialState,

    reducers: {
        setScheduleSelect: (state, action: PayloadAction<Schedule>) => {
            return { scheduleSelect: action.payload };
        },
    },
});

export const { setScheduleSelect } = scheduleSelectSlice.actions;

export const scheduleSelectReducer = scheduleSelectSlice.reducer;
