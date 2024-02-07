import { Seat } from "./Seat.type";
import { Schedule } from "./schedule.type";

export type Departure = {
    id: string;
    routeId: string;
    departureTime: string;
    departureDate: string;
    locked: boolean;
    schedule: Schedule;
    seats: Seat[];
};
