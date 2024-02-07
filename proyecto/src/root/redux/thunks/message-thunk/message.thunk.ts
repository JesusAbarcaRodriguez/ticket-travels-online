import { messageDispatchType, resetMessage } from "../../reducer";

export const resetMessages = (): any => {
    return async (dispatch: messageDispatchType) => {
        dispatch(resetMessage());
    };
};
