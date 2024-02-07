import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Client, Departure, Ticket } from "@/root/types";
import { selectDeparture, selectSeatsBuy, selectTicket, setClient, setSeats, setTicket } from "@/root/redux";
import { LayoutClient } from "@/Layout";
import { personMessage } from "@/schemas";
import PersonForm from "./PersonForm";
import { useEffect } from "react";
import AvailableSeat from "./AvailableSeat";
import toast from "react-hot-toast";

interface FormValues {
    name: string;
    surname: string;
    email: string;
    countTickets: string;
}
export default function PersonMain() {
    const ticket: Ticket = useSelector(selectTicket);
    const departure: Departure = useSelector(selectDeparture);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSeats(departure.seats));
    }, [departure, departure.seats, dispatch]);
    const seats = useSelector(selectSeatsBuy);
    const router = useRouter();
    const initialValues: FormValues = {} as FormValues;
    const calculateTotalToPay = (countTicketsNum: number, priceNum: number): string => {
        return (countTicketsNum * priceNum).toString();
    };
    const createClient = (values: FormValues): Client => {
        const { name, surname, email, countTickets } = values;
        return { name, surname, email, countTickets };
    };
    const handleSubmit = async (values: FormValues) => {
        const client = createClient(values);
        try {
            dispatch(setClient(client));
            const priceRoute = parseFloat(ticket.route.price);
            const totalToPay = calculateTotalToPay(seats.length, priceRoute);
            const ticketUpdate: Ticket = { ...ticket, client, departure, seats, totalToPay };
            dispatch(setTicket(ticketUpdate));
            router.push("/home/client/pay-page");
            toast.success("Step 2 completed!");
        } catch (error) {
            toast.error("Error registering your personal data");
        }
    };
    return (
        <LayoutClient>
            <div className="w-full h-full bg-gradient-to-br from-slate-300 to-white ">
                <AvailableSeat />
                <PersonForm initialValues={initialValues} personMessage={personMessage} handleSubmit={handleSubmit} />
            </div>
        </LayoutClient>
    );
}
