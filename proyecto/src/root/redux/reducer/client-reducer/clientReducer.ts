import { Client } from "@/root/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ClientState {
    client: Client;
}
export const clientInitialState: ClientState = {
    client: {} as Client,
};
type ClientAction = {
    type: string;
    Client?: ClientState;
};
export type clientDispatchType = (args: ClientAction) => ClientAction;

export const clientSlice = createSlice({
    name: "client",

    initialState: clientInitialState,

    reducers: {
        setClient: (state, action: PayloadAction<Client>) => {
            return { client: action.payload };
        },
    },
});
export const { setClient } = clientSlice.actions;

export const clientReducer = clientSlice.reducer;
