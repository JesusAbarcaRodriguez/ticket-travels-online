import { Schedule } from "@/root/types";
import { departureDispatchType, departureReportDispatchType, setDeparture, setReportDepartures, startLoading, stopLoading } from "../../reducer";
import { departureProvider } from "@/root/redux";

export const getDepartureReport = (driverId: string, date: string): any => {
    return async (dispatch: departureReportDispatchType) => {
        dispatch(startLoading());
        const departureList = await departureProvider.getDepartures(driverId, date);
        dispatch(setReportDepartures(departureList));
        dispatch(stopLoading());
    };
};

export const departureToRegister = (routeSelectId: string, date: string, schedule: Schedule): any => {
    return async (dispatch: departureDispatchType) => {
        dispatch(startLoading());
        const departure = await departureProvider.createDeparture(routeSelectId, date, schedule);
        dispatch(setDeparture(departure));
        dispatch(stopLoading());
    };
};
