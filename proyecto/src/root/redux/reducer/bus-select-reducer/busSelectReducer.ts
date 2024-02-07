import { Bus } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface BusSelectState {
    busSelect: Bus;
}
export const busSelectInitialState: BusSelectState = {
    busSelect: {} as Bus,
};
type BusSelectAction = {
    type: string;
    Bus?: BusSelectState;
};
export type busSelectDispatchType = (args: BusSelectAction) => BusSelectAction;

export const busSelectSlice = createSlice({
    name: "busSelect",

    initialState: busSelectInitialState,

    reducers: {
        setBusSelect: (state, action: PayloadAction<Bus>) => {
            return { busSelect: action.payload };
        },
    },
});
export const { setBusSelect } = busSelectSlice.actions;

export const busSelectReducer = busSelectSlice.reducer;
