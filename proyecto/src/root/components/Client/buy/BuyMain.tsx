import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "@/root/types/Route.type";
import { Schedule, Ticket } from "@/root/types";
import { LayoutClient } from "@/Layout";
import { selectDeparture, selectRouteSelect, selectRoutes, setRouteSelect, setScheduleSelect, setTicket } from "@/root/redux";
import { buyMessage } from "@/schemas";
import { departureToRegister } from "@/root/redux/thunks/departure-thunk/departure.thunk";
import BuyForm from "./BuyForm/BuyForm";
import toast from "react-hot-toast";
interface FormValues {
    route: string;
    date: string;
    time: string;
}
export default function BuyMain() {
    const routeSelect: Route = useSelector(selectRouteSelect);
    const dispatch = useDispatch();
    const routeFoundList = useSelector(selectRoutes);
    const router = useRouter();
    const departure = useSelector(selectDeparture);
    const initialValues: FormValues = {} as FormValues;
    const handleSubmit = async (values: FormValues) => {
        const { date, time } = values;
        const scheduleSelect = findSchedule(time) as Schedule;
        try {
            dispatch(departureToRegister(routeSelect.id, date, scheduleSelect));
            const ticket: Ticket = { route: routeSelect, departure: departure } as Ticket;
            dispatch(setTicket(ticket));
            router.push("/home/client/person-page");
            toast.success("Step 1 completed!");
        } catch (error) {
            toast.error("Error creating your departure");
        }
    };
    const findRoute = (selectedRoute: string) => {
        return routeFoundList.find((route: { startPlace: string; destinationPlace: string }) => selectedRoute == `${route.startPlace}-${route.destinationPlace}`);
    };
    const handleRouteSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRoute = event.target.value;
        const route = findRoute(selectedRoute);
        if (route) {
            dispatch(setRouteSelect(route));
        }
    };
    const findSchedule = (time: string) => {
        return routeSelect.schedules.find((schedule: { departureTime: string }) => time == schedule.departureTime);
    };
    const handleScheduleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const time = event.target.value;
        const scheduleSelect = findSchedule(time);
        if (scheduleSelect) {
            dispatch(setScheduleSelect(scheduleSelect));
        }
    };
    return (
        <LayoutClient>
            <main className="bg-gradient-to-br from-slate-300 to-white items-center w-full flex flex-col ">
                <div className=" sm:mt-8 mt-top flex flex-row justify-center w-full sm:w-1/2 items-center p-4 bg-slate-200 hover:bg-blue-200 border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                    <p>Step 1 of 4</p>
                </div>
                <BuyForm initialValues={initialValues} validationSchema={buyMessage} onSubmit={handleSubmit} routeFoundList={routeFoundList} handleRouteSelectChange={handleRouteSelectChange} handleScheduleSelectChange={handleScheduleSelectChange} routeSelect={routeSelect} />
            </main>
        </LayoutClient>
    );
}
