import { Route } from "@/root/types";
import React, { useState } from "react";
interface RouteScheduleProps {
    onClose: () => void;
    showSchedule: Route;
}
function RouteSchedules({ onClose, showSchedule }: RouteScheduleProps) {
    const [showRouteSchedule, setShowRouteSchedule] = useState(true);

    function handleClose() {
        setShowRouteSchedule(false);
        onClose();
    }

    return (
        <>
            {showRouteSchedule && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="bg-white p-8 rounded-md relative border-2 border-black text-center">
                        <button className="absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold mb-4">
                            {" "}
                            {showSchedule.startPlace}-{showSchedule.destinationPlace}
                        </h2>
                        <ul className=" flex flex-col font-medium justify-center items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-col  md:mt-0 md:border-0">
                            {showSchedule.schedules.map((menuItem, index) => (
                                <li key={index} className="nav-item items-center">
                                    <div>
                                        <span>{menuItem.departureTime}</span>
                                        <hr className="border-b border-black mt-4" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
export default RouteSchedules;
