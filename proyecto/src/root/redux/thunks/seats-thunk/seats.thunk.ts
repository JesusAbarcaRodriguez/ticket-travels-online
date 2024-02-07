import { setBlockSeat, departureProvider, seatDispatchType, setSeatBuy, deleteSeat, setMessage, setState } from "@/root/redux";
import { Seat } from "@/root/types";

export const updateSeats = (id: string, seat: Seat): any => {
    return async (dispatch: seatDispatchType) => {
        dispatch(setState("loading"));
        dispatch(setMessage("Loading..."));
        const isUpdate = await departureProvider.blockSeats(id, seat);
        const updatedSeat = { ...seat };
        if (isUpdate.data === true) {
            if (seat.state === "available") {
                updatedSeat.state = "blocked";
                dispatch(setSeatBuy(updatedSeat.number));
            } else if (seat.state === "blocked") {
                updatedSeat.state = "available";
                dispatch(deleteSeat(updatedSeat.number));
            }
        } else {
            updatedSeat.state = "blocked";
            dispatch(setMessage("The seat is already taken"));
            dispatch(setState("error"));
        }
        dispatch(setBlockSeat(updatedSeat));
    };
};
