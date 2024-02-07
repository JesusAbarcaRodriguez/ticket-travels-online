import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { resetMessages } from "../redux/thunks";
import { selectMessage } from "../redux/selectors";
interface MessageType {
    [key: string]: () => void;
}
export default function useMessage() {
    const message = useSelector(selectMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        const messageTypes: MessageType = {
            ok: () => toast.success(message.message),
            loading: () => toast.loading(message.message),
            error: () => toast.error(message.message),
        };
        if (message.message !== "") {
            if (message.state in messageTypes) {
                messageTypes[message.state]();
            }

            dispatch(resetMessages());
        }
    }, [dispatch, message]);
}
