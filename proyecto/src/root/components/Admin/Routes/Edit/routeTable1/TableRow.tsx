import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Route } from "@/root/types";

interface TableRowProps {
    route: Route;
    handleRouteEdit: (route: Route) => void;
    handleRouteDelete: (route: Route) => void;
}

export const TableRow: React.FC<TableRowProps> = ({ route, handleRouteEdit, handleRouteDelete }) => {
    return (
        <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 dark:hover:bg-gray-600">
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{route.startPlace}</td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/12">{route.destinationPlace}</td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/12 hidden sm:table-cell">{route.routeType}</td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/12 hidden sm:table-cell">{route.duration}</td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5 hidden sm:table-cell">{route.price}</td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <button onClick={() => handleRouteEdit(route)} className="mx-2 sm:mx-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 sm:px-5 py-2 text-center mb-2 md:mb-0">
                    <FontAwesomeIcon className="mr-1" icon={faEdit} />
                    Edit
                </button>
            </td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <button onClick={() => handleRouteDelete(route)} className="mx-2 sm:mx-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 sm:px-5 py-2 text-center">
                    <FontAwesomeIcon className="mr-1" icon={faTrash} />
                    Delete
                </button>
            </td>
        </tr>
    );
};
