import { routeDispatchType, setRoutes, routeProvider, startLoading, stopLoading, setRouteUpdate, deleteRoute, setMessage, setState } from "@/root/redux";
import { Route } from "@/root/types";

export const startGetRoute = (): any => {
    return async (dispatch: routeDispatchType) => {
        const routeList = await routeProvider.getRoutes();
        dispatch(setRoutes(routeList));
    };
};
export const searchRoutes = (place: string): any => {
    return async (dispatch: routeDispatchType) => {
        dispatch(setState("loading"));
        dispatch(setMessage("Searching"));
        const response = await routeProvider.search(place);
        if (response.status == 200) {
            const { data } = response;
            const route = data.map((route: Route) => ({
                ...route,
            })) as Route[];
            if (route.length > 0) {
                dispatch(setRoutes(route));
                dispatch(setState("ok"));
                dispatch(setMessage("Loading Route"));
            }
            else {
                dispatch(setState("error"));
                dispatch(setMessage("Route not found"));
            }
        }
    };
};
export const routeToEdit = (route: Route): any => {
    return async (dispatch: routeDispatchType) => {
        dispatch(startLoading());
        await routeProvider.editRoute(route);
        dispatch(setRouteUpdate(route));
        dispatch(stopLoading());
    };
};

export const routeToDelete = (route: Route): any => {
    return async (dispatch: routeDispatchType) => {
        dispatch(startLoading());
        await routeProvider.deleteRoute(route);
        dispatch(deleteRoute(route));
        dispatch(stopLoading());
    };
};

export const routeToCreate = (route: Route): any => {
    return async (dispatch: routeDispatchType) => {
        dispatch(startLoading());
        dispatch(setMessage("Creating"));
        dispatch(setState("loading"));
        const routeResponse = await routeProvider.createRoute(route);
        if (routeResponse.status === 200) {
            dispatch(setState("ok"));
        } else {
            dispatch(setState("error"));
        }
        dispatch(setMessage(routeResponse.data));
        dispatch(stopLoading());
    };
};
