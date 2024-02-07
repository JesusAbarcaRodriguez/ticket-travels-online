import { Departure, Client, Route, Ticket } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface TicketState {
    ticket: Ticket;
}

export const ticketInitialState: TicketState = {
    ticket: {
        route: {} as Route,
        client: {} as Client,
        seats: [],
        totalToPay: "",
        departure: {} as Departure,
    },
};

type TicketPayload = {
    type: Ticket;
    Ticket?: TicketState;
};

export type ticketDispatchType = (args: TicketPayload) => TicketPayload;

export const ticketSlice = createSlice({
    name: "ticket",
    initialState: ticketInitialState,
    reducers: {
        setTicket: (state, action: PayloadAction<Ticket>) => {
            return { ticket: action.payload };
        },
    },
});

export const { setTicket } = ticketSlice.actions;

export const ticketReducer = ticketSlice.reducer;
