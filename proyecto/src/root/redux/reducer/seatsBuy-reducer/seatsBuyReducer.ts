import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SeatBuyState {
    seatsBuy: number[];
}

export const seatBuyInitialState: SeatBuyState = {
    seatsBuy: [],
};

type SeatBuyAction = {
    type: string;
    SeatBuy?: SeatBuyState;
};
export type seatBuyDispatchType = (args: SeatBuyAction) => SeatBuyAction;

export const seatBuySlice = createSlice({
    name: "seatBuy",
    initialState: seatBuyInitialState,
    reducers: {
        setSeatBuy: (state, action: PayloadAction<number>) => {
            if (state.seatsBuy.includes(action.payload)) {
                return state;
            }
            return { ...state, seatsBuy: [...state.seatsBuy, action.payload] };
        },
        deleteSeat: (state, action: PayloadAction<number>) => {
            const updatedSeatsBuy = state.seatsBuy.filter((seat) => seat !== action.payload);
            return { ...state, seatsBuy: updatedSeatsBuy };
        },
    },
});

export const { setSeatBuy, deleteSeat } = seatBuySlice.actions;

export const seatBuyReducer = seatBuySlice.reducer;
