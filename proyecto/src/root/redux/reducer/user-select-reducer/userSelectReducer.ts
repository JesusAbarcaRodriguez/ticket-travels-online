import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/root/types";

interface UserSelectState {
    userSelect: User;
}
export const userSelectInitialState: UserSelectState = {
    userSelect: {
        uid: "",
        name: "",
        type: "",
        contact: "",
        mail: "",
    },
};
type UserSelectAction = {
    type: string;
    User?: UserSelectState;
};
export type userSelectDispatchType = (args: UserSelectAction) => UserSelectAction;

export const userSelectSlice = createSlice({
    name: "userSelect",
    initialState: userSelectInitialState,
    reducers: {
        setUserSelect: (state, action: PayloadAction<User>) => {
            return { userSelect: action.payload };
        },
    },
});

export const { setUserSelect } = userSelectSlice.actions;
export const userSelectReducer = userSelectSlice.reducer;