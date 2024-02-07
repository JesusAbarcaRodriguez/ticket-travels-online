import { User } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: User;
}
export const loginInitialState: AuthState = {
    isAuthenticated: {} as User,
};
type AuthAction = {
    type: string;
    isAuthenticated?: AuthState;
};

export type loginDispatchType = (args: AuthAction) => AuthAction;

export const authSlice = createSlice({
    name: "auth",
    initialState: loginInitialState,
    reducers: {
        setAuthenticated: (state, action: PayloadAction<User>) => {
            return { isAuthenticated: action.payload };
        },
        logOut: (state) => {
            return loginInitialState;
        },
    },
});

export const { setAuthenticated, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
