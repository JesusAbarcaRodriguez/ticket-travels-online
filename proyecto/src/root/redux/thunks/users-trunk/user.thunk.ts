import { userDispatchType, setUsers, userProvider, startLoading, stopLoading, setUserUpdate, setMessage, setState } from "@/root/redux";
import { User } from "@/root/types";

export const startGetUsers = (name: string): any => {
    return async (dispatch: userDispatchType) => {
        dispatch(setState("loading"));
        dispatch(setMessage("Searching"));
        const response = await userProvider.searchUser(name);
        if (response.status == 200) {
            const { data } = response;
            const user = data.map((user: User) => ({
                ...user,
            })) as User[];
            if (user.length > 0) {
                dispatch(setUsers(user));
                dispatch(setState("ok"));
                dispatch(setMessage("Loading User"));
            }
            else {
                dispatch(setState("error"));
                dispatch(setMessage("User not found"));
            }
        }
    };
};

export const userToRegister = (email: string, password: string, username: string, contact: string, type: string): any => {
    return async (dispatch: userDispatchType) => {
        dispatch(startLoading());
        dispatch(setMessage("Creating"));
        dispatch(setState("loading"));
        const userResponse = await userProvider.createUser(email, password, username, contact, type);
        if (userResponse.status === 200) {
            dispatch(setState("ok"));
        } else {
            dispatch(setState("error"));
        }
        dispatch(setMessage(userResponse.data));
        dispatch(stopLoading());
    };
};
export const userToEdit = (user: User): any => {
    return async (dispatch: userDispatchType) => {
        dispatch(startLoading());
        await userProvider.editUser(user);
        dispatch(setUserUpdate(user));
        dispatch(stopLoading());
    };
};

export const userToDelete = (user: User, userList: User[]): any => {
    return async (dispatch: userDispatchType) => {
        dispatch(startLoading());
        await userProvider.deleteUser(user);
        const newUserList = userList.filter((item) => item !== user);
        dispatch(setUsers(newUserList));
        dispatch(stopLoading());
    };
};
