import { RoutePage } from "@/root/components";
import { startGetDrivers } from "@/root/redux";
import { useDispatch } from "react-redux";

export default function ResgisterRoute() {
    const dispatch = useDispatch();
    dispatch(startGetDrivers());
    return <RoutePage />;
}
