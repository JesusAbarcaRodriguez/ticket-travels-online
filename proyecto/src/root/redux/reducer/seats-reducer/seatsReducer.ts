import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Seat } from "@/root/types";

interface SeatState {
    seats: Seat[];
}

export const seatInitialState: SeatState = {
    seats: [],
};

type SeatAction = {
    type: string;
    Seat?: SeatState;
};
export type seatDispatchType = (args: SeatAction) => SeatAction;

export const seatSlice = createSlice({
    name: "seat",
    initialState: seatInitialState,
    reducers: {
        setSeats: (state, action: PayloadAction<Seat[]>) => {
            return { seats: action.payload };
        },
        setBlockSeat: (state, action: PayloadAction<Seat>) => {
            const { payload: updatedSeat } = action;
            const { seats } = state;
            const updatedSeats = seats.map((seat) => (seat.number === updatedSeat.number ? updatedSeat : seat));
            return { seats: updatedSeats };
        },
    },
});

export const { setSeats, setBlockSeat } = seatSlice.actions;

export const seatReducer = seatSlice.reducer;
