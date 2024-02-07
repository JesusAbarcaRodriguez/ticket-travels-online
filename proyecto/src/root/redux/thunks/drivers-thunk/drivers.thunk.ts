import { drivesDispatchType, setDrivers, startLoading, stopLoading, userProvider } from "@/root/redux";
import { User } from "@/root/types";


export const startGetDrivers = (): any => {
    return async (dispatch: drivesDispatchType) => {
        dispatch(startLoading());
        const drivers = await userProvider.getDrivers() as unknown as User[];
        dispatch(setDrivers(drivers));
        dispatch(stopLoading());
    };
};

