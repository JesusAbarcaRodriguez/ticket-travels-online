import { Message } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayState {
    messageF: Message;
}

export const massageInitialState: PayState = {
    messageF: {
        message: "",
        state: "",
    },
};

type messageAction = {
    type: string;
    messageF?: PayState;
};
export type messageDispatchType = (args: messageAction) => messageAction;

export const massageSlice = createSlice({
    name: "massage",
    initialState: massageInitialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                messageF: {
                    ...state.messageF,
                    message: action.payload,
                },
            };
        },
        setState: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                messageF: {
                    ...state.messageF,
                    state: action.payload,
                },
            };
        },
        resetMessage: () => massageInitialState,
    },
});

export const { setMessage, resetMessage, setState } = massageSlice.actions;
export const messageReducer = massageSlice.reducer;
