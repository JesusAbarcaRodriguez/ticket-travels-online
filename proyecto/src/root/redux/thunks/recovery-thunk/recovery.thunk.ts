import { recoveryProvider, startLoading, stopLoading } from "@/root/redux";
import { Dispatch } from "react";

export const recoveryPassword = (email: string): any => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(startLoading());
        await recoveryProvider.recovery(email);
        dispatch(stopLoading());
    };
};
