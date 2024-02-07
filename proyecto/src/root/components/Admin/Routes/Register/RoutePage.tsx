import { useRouter } from "next/router";
import { Route } from "@/root/types/";
import { useDispatch } from "react-redux";
import { setRouteRegister } from "@/root/redux/";
import RouteForm from "./RouteForm";
import { LayoutAdmin } from "@/Layout";
import { routeMessage } from "@/schemas";
interface FormValues {
    id: string;
    startPlace: string;
    destinationPlace: string;
    duration: string;
    price: string;
    routeType: string;
    image: string;
}
export default function RoutePage() {
    const dispatch = useDispatch();
    const initialValues: FormValues = {
        id: "",
        startPlace: "",
        destinationPlace: "",
        duration: "",
        price: "",
        routeType: "",
        image: "",
    };
    const router = useRouter();
    const handleSubmit = async (values: FormValues) => {
        const { id, startPlace, destinationPlace, duration, price, routeType, image } = values;
        const routeToRegister: Route = { id, startPlace, destinationPlace, duration, price, routeType, image } as Route;
        dispatch(setRouteRegister(routeToRegister));
        if (routeToRegister.routeType === "Normal") {
            router.push("/private/admin/register-schedule");
        } else {
            router.push("/private/admin/register-image");
        }
    };
    return (
        <LayoutAdmin>
            <RouteForm initialValues={initialValues} validationSchema={routeMessage} onSubmit={handleSubmit} />
        </LayoutAdmin>
    );
}
