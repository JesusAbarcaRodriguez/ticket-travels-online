import { Departure } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DepartureReportState {
    reportDeparture: Departure[];
}
export const departureReportInitialState: DepartureReportState = {
    reportDeparture: [],
};
type DepartureReportAction = {
    type: string;
    departure?: DepartureReportState;
};

export type departureReportDispatchType = (args: DepartureReportAction) => DepartureReportAction;

export const DepartureReportSlice = createSlice({
    name: "departure",
    initialState: departureReportInitialState,
    reducers: {
        setReportDepartures: (state, action: PayloadAction<Departure[]>) => {
            return { reportDeparture: action.payload };
        },
    },
});

export const { setReportDepartures } = DepartureReportSlice.actions;
export const reportDepartureReducer = DepartureReportSlice.reducer;
