export const startLoading = () => ({
    type: "START_LOADING" as const,
});

export const stopLoading = () => ({
    type: "STOP_LOADING" as const,
});

export type LoadingActionTypes = ReturnType<typeof startLoading> | ReturnType<typeof stopLoading>;
