import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Route } from "@/root/types";

interface RouteState {
    routes: Route[];
}

export const routeInitialState: RouteState = {
    routes: [],
};

type RouteAction = {
    type: string;
    Route?: RouteState;
};
export type routeDispatchType = (args: RouteAction) => RouteAction;

export const routeSlice = createSlice({
    name: "route",
    initialState: routeInitialState,
    reducers: {
        setRoutes: (state, action: PayloadAction<Route[]>) => {
            return { routes: action.payload };
        },
        setRouteUpdate: (state, action: PayloadAction<Route>) => {
            const updatedRoute = action.payload;
            const routesUpdated = state.routes.map((route) => (route.id === updatedRoute.id ? updatedRoute : route));
            return { routes: routesUpdated };
        },
        deleteRoute: (state, action: PayloadAction<Route>) => {
            const routeIdToDelete = action.payload.id;
            const routesUpdated = state.routes.filter((route) => route.id !== routeIdToDelete);
            return { routes: routesUpdated };
        },
    },
});

export const { setRoutes, setRouteUpdate, deleteRoute } = routeSlice.actions;

export const routeReducer = routeSlice.reducer;
