import { RootState } from "@/root/redux";

export const selectSeats = (state: RootState) => state.seatsStore.seats;
