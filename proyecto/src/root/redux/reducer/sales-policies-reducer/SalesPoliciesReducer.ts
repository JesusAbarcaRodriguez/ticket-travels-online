import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SalesPoliciesState {
    salesPolicies: boolean;
}

export const SalesPoliciesInitialState: SalesPoliciesState = {
    salesPolicies: true,
};

type SalesPoliciesAction = {
    type: boolean;
    SalesPolicies?: SalesPoliciesState;
};
export type SalesPoliciesDispatchType = (args: SalesPoliciesAction) => SalesPoliciesAction;

export const salesPoliciesSlice = createSlice({
    name: "salesPolicies",

    initialState: SalesPoliciesInitialState,

    reducers: {
        setSalesPolicies: (state, action: PayloadAction<boolean>) => {
            return { salesPolicies: action.payload };
        },
    },
});

export const { setSalesPolicies } = salesPoliciesSlice.actions;

export const salesPoliciesReducer = salesPoliciesSlice.reducer;
