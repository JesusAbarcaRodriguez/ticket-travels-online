import { Client } from "./Client.type";
import { Departure } from "./Departure.type";
import { Route } from "./Route.type";
export type Ticket = {
    route: Route;
    client: Client;
    seats: number[];
    totalToPay: string;
    departure: Departure;
};
