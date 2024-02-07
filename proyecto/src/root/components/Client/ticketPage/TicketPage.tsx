import { selectTicket } from "@/root/redux";
import { useSelector } from "react-redux";
import { Ticket } from "@/root/types";
import React from "react";
export default function TicketPage() {
    const ticket: Ticket = useSelector(selectTicket);
    const ticketAttributes = [
        { title: "Route", attribute: `${ticket.route.startPlace}-${ticket.route.destinationPlace}` },
        { title: "Date", attribute: ticket.departure.departureDate },
        { title: "Hour", attribute: ticket.departure.departureTime },
        { title: "Client", attribute: `${ticket.client.name} ${ticket.client.surname}` },
        { title: "Email", attribute: ticket.client.email },
        { title: "Count of seats", attribute: ticket.seats.length },
        { title: "Price", attribute: "$" + ticket.route.price },
        { title: "Seats", attribute: ticket.seats.toString() },
        { title: "Total to buy", attribute: "$" + ticket.totalToPay },
    ];
    return (
        <div className="bg-white rounded-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-custom  m-10 mx-auto">
            <div className="bg-blue-500 rounded-t-lg py-4 mb-6">
                <h2 className="text-white font-semibold text-3xl text-center">BUSTICKETS UNA</h2>
            </div>
            <div className="p-8">
                {ticketAttributes.map((attribute, index) => (
                    <p className="mb-4 text-lg text-left md:text-left" key={index}>
                        <span className="font-semibold">{attribute.title}:</span> {attribute.attribute}
                    </p>
                ))}
            </div>
        </div>
    );
}
