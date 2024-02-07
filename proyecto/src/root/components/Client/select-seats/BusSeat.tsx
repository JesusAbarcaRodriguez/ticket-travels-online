import { selectSeatsBuy } from "@/root/redux";
import { Seat } from "@/root/types";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export type SeatState = "blocked" | "available" | "sold";

type BusSeatProps = {
    seat: Seat;
    onSelect: () => void;
    className: string;
};

const BusSeat: React.FC<BusSeatProps> = ({ seat, onSelect, className }) => {
    const seatsToBuy = useSelector(selectSeatsBuy);

    const isMySeat = (seatNumber: number) => {
        return seatsToBuy.includes(seatNumber);
    };

    const getSeatColor = (seat: { state: string; number: number }): string => {
        switch (seat.state) {
            case "blocked":
                if (isMySeat(seat.number)) {
                    return "seat-selected";
                }
                return "seat-blocked";
            case "available":
                return "seat-available";
            case "sold":
                return "seat-sold";
            default:
                return "seat-blocked";
        }
    };

    const handleClick = async () => {
        if (seat.state !== "sold") {
            await onSelect();
        }
    };

    return (
        <Link href="" className={`bg-slate-200 h-14 ml-0 mr-0 w-14 text-3xl flex items-center justify-center ${getSeatColor(seat)} ${className}`} onClick={handleClick}>
            {seat.number}
        </Link>
    );
};
export default BusSeat;
