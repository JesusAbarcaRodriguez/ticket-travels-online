import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/root/types";

interface UserState {
    users: User[];
}

export const userInitialState: UserState = {
    users: [],
};

type UserAction = {
    type: string;
    User?: UserState;
};
export type userDispatchType = (args: UserAction) => UserAction;

export const userSlice = createSlice({
    name: "user",

    initialState: userInitialState,

    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            const users = action.payload;
            const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
            return { users: sortedUsers };
        },
        setUserUpdate: (state, action: PayloadAction<User>) => {
            const updatedUser = action.payload;
            const usersUpdated = state.users.map((user) => (user.uid === updatedUser.uid ? updatedUser : user));
            return { users: usersUpdated };
        },
    },
});

export const { setUsers, setUserUpdate } = userSlice.actions;

export const userReducer = userSlice.reducer;
