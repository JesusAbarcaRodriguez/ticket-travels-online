import { selectDeparture } from "@/root/redux";
import { Departure, Seat } from "@/root/types";
import { useSelector } from "react-redux";
export default function AvailableSeat() {
    const departure: Departure = useSelector(selectDeparture);
    let available = 0;

    if (departure.seats && Array.isArray(departure.seats)) {
        departure.seats.map((seat: Seat) => {
            if (seat.state === "available") {
                available++;
            }
        });
    }
    const numAvailable = available > 10 ? "more than 10" : `(${available} available)`;
    let colorClass = "";
    if (available < 5) {
        colorClass = "text-red-500 ";
    } else if (available >= 5 && available < 20) {
        colorClass = "text-yellow-300";
    } else {
        colorClass = "text-green-500 ";
    }

    return (
        <div>
            <p className="text-4xl text-black font-bold mt-10 text-center animate-pulse animate-faster">
                Available Seats: <span className={`text-4xl font-bold  ${colorClass}`}>{numAvailable}</span>
            </p>
        </div>
    );
}
