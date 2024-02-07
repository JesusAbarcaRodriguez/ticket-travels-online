import { Bus } from "@/root/types";
import { busDispatchType,  setBuses, setMessage, setState, startLoading, stopLoading } from "../../reducer";
import { busesProvider } from "@/root/redux";

export const busToRegister = (bus: Bus): any => {
    return async (dispatch: busDispatchType) => {
        dispatch(startLoading());
        dispatch(setMessage("Creating"))
        dispatch(setState("loading"))
        const busResponse = await busesProvider.registerBus(bus);
        if(busResponse.status=== 200){dispatch(setState("ok"))}
        else{dispatch(setState("error"))}
        dispatch(setMessage(busResponse.data))
        dispatch(stopLoading());
    };
};

export const startGetBuses = (): any => {
    return async (dispatch: busDispatchType) => {
        dispatch(startLoading());
        const buses = await busesProvider.getBuses() as Bus[];
        dispatch(setBuses(buses));
        dispatch(stopLoading());
    };
};