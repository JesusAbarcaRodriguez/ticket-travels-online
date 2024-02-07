import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Route } from "@/root/types";
interface RouteSelectState {
    routeSelect: Route;
}
export const routeSelectInitialState: RouteSelectState = {
    routeSelect: {} as Route,
};
type RouteSelectAction = {
    type: string;
    Route?: RouteSelectState;
};
export type routeSelectDispatchType = (args: RouteSelectAction) => RouteSelectAction;

export const routeSelectSlice = createSlice({
    name: "routeSelect",
    initialState: routeSelectInitialState,
    reducers: {
        setRouteSelect: (state, action: PayloadAction<Route>) => {
            return { routeSelect: action.payload };
        },
    },
});

export const { setRouteSelect } = routeSelectSlice.actions;
export const routeSelectReducer = routeSelectSlice.reducer;
