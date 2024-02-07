import { User } from "@/root/types";
import { loginProvider, loginDispatchType, setAuthenticated, startLoading, stopLoading } from "@/root/redux";

export const startLogin = (email: string, password: string): any => {
    return async (dispatch: loginDispatchType) => {
        dispatch(startLoading());
        const isAuthenticated = await loginProvider.login(email, password);

        if (isAuthenticated) {
            const loginUser: User = await loginProvider.loginUid(isAuthenticated.uid);
            dispatch(setAuthenticated(loginUser));
            dispatch(stopLoading());
            return true;
        }
        dispatch(stopLoading());
    };
};
