import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { payReducer, departureReducer, routeToRegisterReducer, routeReducer, routeSelectReducer, userReducer, ticketReducer, clientReducer, authReducer, scheduleReducer, loadingReducer, seatReducer, seatBuyReducer, imageReducer, busReducer, busSelectReducer, scheduleSelectReducer, messageReducer, driversReducer } from "@/root/redux";
import { salesPoliciesReducer } from "./reducer/sales-policies-reducer/SalesPoliciesReducer";
import { userSelectReducer } from "./reducer/user-select-reducer/userSelectReducer";
import { reportDepartureReducer } from "./reducer/reportDeparture-reducer";
export const ApplicationStore = configureStore({
    reducer: {
        authStore: authReducer,
        departureStore: departureReducer,
        reportDepartureStore: reportDepartureReducer,
        userStore: userReducer,
        routeStore: routeReducer,
        routeSelectStore: routeSelectReducer,
        ticketStore: ticketReducer,
        clientStore: clientReducer,
        scheduleStore: scheduleReducer,
        imageStore: imageReducer,
        routeToRegisterStore: routeToRegisterReducer,
        payStore: payReducer,
        loadingStore: loadingReducer,
        salesPoliciesStore: salesPoliciesReducer,
        userSelectStore: userSelectReducer,
        seatsStore: seatReducer,
        seatsBuyStore: seatBuyReducer,
        busStore: busReducer,
        busSelectStore: busSelectReducer,
        scheduleSelectStore: scheduleSelectReducer,
        messageStore: messageReducer,
        drivers: driversReducer,
    },
});

export type RootState = ReturnType<typeof ApplicationStore.getState>;
export default ApplicationStore;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
