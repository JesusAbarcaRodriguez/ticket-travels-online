import { RootState } from "@/root/redux";

export const selectSeatsBuy = (state: RootState) => state.seatsBuyStore.seatsBuy;
