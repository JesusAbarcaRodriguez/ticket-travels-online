import { Departure } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DepartureState {
    departure: Departure;
}
export const departureInitialState: DepartureState = {
    departure: {} as Departure,
};
type DepartureAction = {
    type: string;
    departure?: DepartureState;
};

export type departureDispatchType = (args: DepartureAction) => DepartureAction;

export const departureSlice = createSlice({
    name: "departure",
    initialState: departureInitialState,
    reducers: {
        setDeparture: (state, action: PayloadAction<Departure>) => {
            return { departure: action.payload };
        },
    },
});

export const { setDeparture } = departureSlice.actions;
export const departureReducer = departureSlice.reducer;
