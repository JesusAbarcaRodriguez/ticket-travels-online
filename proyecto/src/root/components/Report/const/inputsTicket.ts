import { Ticket } from "@/root/types";

interface Props {
    day: number;
    month: number;
    year: number;
    ticket: Ticket;
    qrValue: string;
}

export const inputsTicket = (props: Props) => {
    const { day, month, year, ticket, qrValue } = props;
    return [
        {
            dateauto: `${day}/${month}/${year}`,
            route: `${ticket.route.startPlace} -  ${ticket.route.destinationPlace}`,
            date: `${ticket.departure.departureDate}`,
            time: `${ticket.departure.departureTime}`,
            client: `${ticket.client.name} ${ticket.client.surname}`,
            email: `${ticket.client.email}`,
            countseats: `${ticket.seats.length}`,
            price: `${"$" + ticket.route.price}`,
            seat: `${ticket.seats.toString()}`,
            total: `${"$" + ticket.totalToPay}`,
            bus: `${ticket.departure.schedule.bus.busNumber}`,
            qr: `${qrValue}`,
        },
    ];
};
