import { payProvider } from "@/root/redux";
import { payDispatchType, setMessage, setState, startLoading, stopLoading } from "../../reducer";
import { Dispatch } from "react";

export const payDelete = (id: string): any => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(startLoading());
        dispatch(setMessage("Validating..."));
        dispatch(setState("loading"));
        const response = await payProvider.deletePay(id);
        if (response.status === 200) {
            dispatch(setState("ok"));
        } else {
            dispatch(setState("error"));
        }
        dispatch(setMessage(response.data));
        dispatch(stopLoading());
    };
};
export const payCreate = (idPayment: string): any => {
    return async (dispatch: payDispatchType) => {
        await payProvider.createPay(idPayment);
    };
};
