import { Bus } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface BusState {
    bus: Bus[];
}
export const busInitialState: BusState = {
    bus: [],
};
type BusAction = {
    type: string;
    Bus?: BusState;
};
export type busDispatchType = (args: BusAction) => BusAction;

export const busSlice = createSlice({
    name: "bus",

    initialState: busInitialState,

    reducers: {
        setBuses: (state, action: PayloadAction<Bus[]>) => {
            return { bus: action.payload };
        },
    },
});
export const { setBuses } = busSlice.actions;

export const busReducer = busSlice.reducer;
