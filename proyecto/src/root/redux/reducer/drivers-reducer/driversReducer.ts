import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/root/types";

interface DriversState {
    drivers: User[];
}

export const driversInitialState: DriversState = {
    drivers: [],
};

type DriversAction = {
    type: string;
    drivers?: DriversState;
};
export type drivesDispatchType = (args: DriversAction) => DriversAction;

export const drivesSlice = createSlice({
    name: "drivers",
    initialState: driversInitialState,
    reducers: {
        setDrivers: (state, action: PayloadAction<User[]>) => {
            const drivesList = action.payload;
            state.drivers = [...drivesList].sort((a, b) => a.name.localeCompare(b.name));
        },
    },
});

export const { setDrivers } = drivesSlice.actions;

export const driversReducer = drivesSlice.reducer;