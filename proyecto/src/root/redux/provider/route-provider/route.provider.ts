import { Route } from "@/root/types";
import axios from "axios";

const getRoutes = async () => {
    const response = await axios.get("/api/routes");
    if (!(response.status >= 200 && response.status < 300)) {
        throw new Error("Network response was not ok");
    }
    const { data } = response;
    const routes = data.map((route: Route) => ({
        ...route,
    }));
    return routes;
};

export const search = async (place: string) => {
    const response = await axios.get("/api/routes/by-place", {
        params: {
            place: place,
        },
    });
    return response;
};

const createRoute = async (route: Route) => {
    const response = await axios.post("/api/routes", { route: route });
    return response;
};
const deleteRoute = async (route: Route) => {
    await axios.delete(`/api/routes/${route.id}`);
};

const editRoute = async (route: Route) => {
    await axios.put("/api/routes", { route: route });
};
export const routeProvider = {
    getRoutes,
    createRoute,
    editRoute,
    deleteRoute,
    search,
};
