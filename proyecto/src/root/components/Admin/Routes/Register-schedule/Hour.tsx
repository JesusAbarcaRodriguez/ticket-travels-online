import React from "react";
import { selectRouteToRegister } from "@/root/redux/selectors/routeToRegister-selector/routeToRegister";
import { useSelector } from "react-redux";
import { Schedule } from "@/root/types";

interface ScheduleProps {
    schedule: Schedule;
}
export default function Hour({ schedule }: ScheduleProps) {
    const routeToRegister = useSelector(selectRouteToRegister);
    const scheduleDetails = [
        { label: "Departure time", value: schedule.departureTime },
        { label: "Bus Number", value: schedule.bus.busNumber },
        { label: "Driver ID", value: schedule.driverId.name },
    ];
    return (
        <div className="mb-5 bg-gray-200 shadow-md p-5 rounded-lg w-full ">
            <p className=" font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Route:
                <span className="font-normal normal-case ">{`${routeToRegister.startPlace}-${routeToRegister.destinationPlace}`}</span>
            </p>
            {scheduleDetails.map((detail, index) => (
                <p key={index} className="font-bold mb-3 text-gray-700 uppercase">
                    {detail.label}:<span className="font-normal normal-case">{detail.value}</span>
                </p>
            ))}
            <div className="flex justify-between mt-5"></div>
        </div>
    );
}
