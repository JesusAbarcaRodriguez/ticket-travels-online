import React from "react";
import { Route } from "@/root/types";
import { TableRow } from "./TableRow";

interface TableBodyProps {
    routesFoundList: Route[];
    handleRouteEdit: (route: Route) => void;
    handleRouteDelete: (route: Route) => void;
}

export const TableBody: React.FC<TableBodyProps> = ({ routesFoundList, handleRouteEdit, handleRouteDelete }) => {
    return (
        <tbody className="w-full overflow-y-scroll">
            {routesFoundList.map((route, index) => (
                <TableRow key={index} route={route} handleRouteEdit={handleRouteEdit} handleRouteDelete={handleRouteDelete} />
            ))}
        </tbody>
    );
};
