import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetRoute } from "@/root/redux";

export default function useRoute() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startGetRoute());
    }, [dispatch]);
}
