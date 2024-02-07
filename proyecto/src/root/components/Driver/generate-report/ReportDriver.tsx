import { Departure } from "@/root/types";
import { useState } from "react";
import Report from "./report/Report";

interface ReportProp {
    item: Departure;
}

export default function ReportDriver({ item }: ReportProp) {
    const [showReport, setShowReport] = useState(false);
    const handleCloseAbout = () => {
        setShowReport(false);
    };
    const seatAvailability = {
        soldSeats: item.seats.filter((seat) => seat.state === "sold").length,
        availableSeats: item.seats.filter((seat) => seat.state === "available").length,
    };
    const handlePrint = () => {
        setShowReport(true);
    };
    return (
        <>
            <div className="m-4  mb-5 bg-gray-200 shadow-md p-5 rounded-lg md:mx-5">
                <p className="font-bold mb-3 text-gray-700 uppercase"> {" "} Date: <span className="font-normal normal-case ">{item.departureDate}</span>{" "} </p>
                <p className="font-bold mb-3 text-gray-700 uppercase"> {" "} Departure Time: <span className="font-normal normal-case ">{item.departureTime}</span>{" "} </p>
                <p className="font-bold mb-3 text-gray-700 uppercase"> {" "} Count of seats: <span className="font-normal normal-case ">{item.seats.length}</span>{" "} </p>
                <p className="font-bold mb-3 text-gray-700 uppercase"> {" "} Seats Sold: <span className="font-normal normal-case ">{seatAvailability.soldSeats}</span>{" "} </p>
                <p className="font-bold mb-3 text-gray-700 uppercase"> {" "} Seats available: <span className="font-normal normal-case ">{seatAvailability.availableSeats}</span>{" "} </p>
                <div className="flex justify-between mt-5">
                    <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handlePrint}> {" "} Select{" "} </button>
                    {showReport && <Report onClose={handleCloseAbout} departure={item} seatAvailability={seatAvailability} />}
                </div>
            </div>
        </>
    );
}
