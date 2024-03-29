interface LoadingState {
    isLoading: boolean;
}

const initialState: LoadingState = {} as LoadingState;

type LoadingAction = { type: "START_LOADING" } | { type: "STOP_LOADING" };

const loadingReducer = (state: LoadingState = initialState, action: LoadingAction): LoadingState => {
    switch (action.type) {
        case "START_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "STOP_LOADING":
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default loadingReducer;
