import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SendMail } from "@/root/types";

interface MailState {
    mails: SendMail;
}

export const MailInitialState: MailState = {
    mails: {} as SendMail,
};

type MailAction = {
    type: string;
    Mail?: MailState;
};
export type mailDispatchType = (args: MailAction) => MailAction;

export const mailSlice = createSlice({
    name: "mail",
    initialState: MailInitialState,
    reducers: {
        setMail: (state, action: PayloadAction<SendMail>) => {
            return { mails: action.payload };
        },
    },
});

export const { setMail } = mailSlice.actions;
export const mailReducer = mailSlice.reducer;
