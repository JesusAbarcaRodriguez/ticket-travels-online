import { RootState } from "@/root/redux";

export const selectSalesPolicies = (state: RootState) => state.salesPoliciesStore.salesPolicies;
