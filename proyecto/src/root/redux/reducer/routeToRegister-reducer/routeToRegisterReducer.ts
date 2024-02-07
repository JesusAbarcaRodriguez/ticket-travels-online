import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Route } from "@/root/types";

interface RouteRegisterState {
    routeToRegister: Route;
}

export const routeRegisterInitialState: RouteRegisterState = {
    routeToRegister: { id: "", schedules: [], destinationPlace: "", startPlace: "", duration: "", price: "", routeType: "", image: "" },
};

type RouteRegisterAction = {
    type: string;
    Route?: RouteRegisterState;
};
export type routeRegisterDispatchType = (args: RouteRegisterAction) => RouteRegisterAction;

export const routeToRegisterSlice = createSlice({
    name: "routeToRegister",
    initialState: routeRegisterInitialState,
    reducers: {
        setRouteRegister: (state, action: PayloadAction<Route>) => {
            return { routeToRegister: action.payload };
        },
        setImagesUrl: (state, action: PayloadAction<string>) => {
            return { routeToRegister: { ...state.routeToRegister, image: action.payload } };
        },
    },
});

export const { setRouteRegister, setImagesUrl } = routeToRegisterSlice.actions;

export const routeToRegisterReducer = routeToRegisterSlice.reducer;
