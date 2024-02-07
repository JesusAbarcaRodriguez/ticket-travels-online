import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pay } from "@/root/types";
interface PayState {
    pays: Pay;
}

export const PayInitialState: PayState = {
    pays: {} as Pay,
};

type PayAction = {
    type: string;
    Pay?: PayState;
};
export type payDispatchType = (args: PayAction) => PayAction;

export const paySlice = createSlice({
    name: "pay",
    initialState: PayInitialState,
    reducers: {
        setPay: (state, action: PayloadAction<Pay>) => {
            return { pays: action.payload };
        },
    },
});

export const { setPay } = paySlice.actions;
export const payReducer = paySlice.reducer;
