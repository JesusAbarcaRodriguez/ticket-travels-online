import { RootState } from "@/root/redux";

export const selectTicket = (state: RootState) => state.ticketStore.ticket;
