import React, { useEffect, useState } from "react";
import BusSeat from "./BusSeat";
import { selectSeats, selectSeatsBuy, updateSeats } from "@/root/redux";
import { useDispatch, useSelector } from "react-redux";
import { Seat } from "@/root/types";
import { selectDeparture } from "@/root/redux";
import SeatsGuide from "./SeatsGuide";
import toast from "react-hot-toast";

interface SeatProps {
    onClose: () => void;
    onSeatSelection: (selected: boolean) => void;
}

export default function BusSeatingChart({ onClose, onSeatSelection }: SeatProps) {
    const dispatch = useDispatch();
    const [seatsSelected, setSeatsSelected] = useState(false);
    const seatsToBuy = useSelector(selectSeatsBuy);
    const departure = useSelector(selectDeparture);
    const seats = useSelector(selectSeats);
    const [showSeat, setShowSeat] = useState(true);
    const isMySeat = (seatNumber: number) => {
        return seatsToBuy.includes(seatNumber);
    };

    const handleSeatSelection = async (seat: Seat) => {
        if (seat.state === "available") {
            if (seatsToBuy.length < 10) {
                await dispatch(updateSeats(departure.id, seat));
            } else {
                toast.error("You have already selected 10 seats.");
            }
        }

        if (isMySeat(seat.number)) {
            await dispatch(updateSeats(departure.id, seat));
        }
    };

    function handleClose() {
        setShowSeat(false);
        onClose();
    }
    useEffect(() => {
        const areSeatsSelected = seatsToBuy.length > 0;
        setSeatsSelected(areSeatsSelected);
        onSeatSelection(areSeatsSelected);
    }, [seatsToBuy, onSeatSelection]);

    return (
        <>
            {showSeat && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="bg-white p-8 rounded-md relative border-2 border-black text-center h-auto">
                        <button className="absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Choose seats</h2>
                        <SeatsGuide />
                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-4 gap-0">
                                {seats.map((seat) => {
                                    const shouldAddMargin = seat.number % 4 === 2;
                                    const seatClasses = `${shouldAddMargin ? "text-right border border-r-8 border-l-slate-200 border-y-slate-200 border-r-white" : " mx-4"}`;
                                    return <BusSeat key={seat.number} seat={seat} onSelect={() => handleSeatSelection(seat)} className={seatClasses} />;
                                })}
                            </div>
                        </div>
                        <button className=" m-4 w-20 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClose}>
                            Ready
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
