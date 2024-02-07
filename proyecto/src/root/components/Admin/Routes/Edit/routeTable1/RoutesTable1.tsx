import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Route } from "@/root/types";
import { routeToDelete, setRouteSelect } from "@/root/redux";
import RouteEditForm from "../RouteEditForm";
import { TableBody, TableHeader } from ".";
interface RoutesTableProps {
    routesFoundList: Route[];
}

const RoutesTable: React.FC<RoutesTableProps> = ({ routesFoundList }) => {
    const dispatch = useDispatch();

    const [showEdit, setShowEdit] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

    const handleRouteDelete = async (route: Route) => {
        try {
            await dispatch(routeToDelete(route));
            toast.success("Route deleted successfully");
        } catch (error) {
            toast.error("Error deleting the route");
        }
    };

    const handleRouteEdit = (route: Route) => {
        dispatch(setRouteSelect(route));
        setSelectedRoute(route);
        setShowEdit(true);
    };

    const handleClose = () => {
        setSelectedRoute(null);
        setShowEdit(false);
    };

    return (
        <div className="overflow-y-scroll max-h-96 rounded-lg w-full relative shadow-md sm:rounded-lg">
            {showEdit && <RouteEditForm close={handleClose} />}
            <div className="">
                <table className="h-1/4 overflow-y-scroll w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHeader />
                    <TableBody routesFoundList={routesFoundList} handleRouteEdit={handleRouteEdit} handleRouteDelete={handleRouteDelete} />
                </table>
            </div>
        </div>
    );
};

export default RoutesTable;
