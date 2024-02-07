import { useState } from "react";
import { Route } from "@/root/types";
import RoutesTable from "./routeTable1/RoutesTable1";
import SearchBarRoute from "./SearchBarRoute";

interface RouteListProps {
    routes: Route[];
}

export default function RouteListAdmin({ routes }: RouteListProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredRoutes = routes.filter((route) => route.startPlace.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="relative  rounded-lg w-full">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search Routes to Edit
            </label>
            <div className="relative m-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <SearchBarRoute />
            </div>
            <div className="flex justify-center items-center relative overflow-auto ">{filteredRoutes.length > 0 ? <RoutesTable routesFoundList={filteredRoutes} /> : <div className="w-[500px] h-full m-4 font-bold flex justify-center items-center text-center text-green-600 mt-4 animate-pulse animate-faster p-4 text-4xl">User list here!</div>}</div>
        </div>
    );
}
