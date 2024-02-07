import { Route } from "@/root/types/Route.type";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import RouteSchedules from "./RouteSchedules";

interface NewItemProps {
    item: Route;
}
const Hours = ({ item }: NewItemProps) => {
    const [showRouteSchedule, setShowRouteSchedule] = useState(false);
    const handleShowSchedule = () => {
        setShowRouteSchedule(false);
    };
    return (
        <div className="w-full h-full p-4">
            <div className="flex flex-col justify-center items-center border-4 border-gray p-6 rounded-lg bg-white h-full">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4">
                    <FontAwesomeIcon icon={faRoute} className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">{`${item.startPlace} - ${item.destinationPlace}`}</h2>
                <p className="leading-relaxed text-base text-center">Duration: {item.duration}</p>
                <div className="flex justify-center mt-4">
                    <button onClick={() => setShowRouteSchedule(true)} className="bg-white hover:bg-blue-200 border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                        Ver Horarios
                    </button>
                </div>
            </div>
            {showRouteSchedule && <RouteSchedules onClose={handleShowSchedule} showSchedule={item} />}
        </div>
    );
};
export default Hours;
