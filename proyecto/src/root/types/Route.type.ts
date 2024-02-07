import { Schedule } from "./schedule.type";

export type Route = {
    id: string;
    schedules: Schedule[];
    destinationPlace: string;
    startPlace: string;
    duration: string;
    price: string;
    routeType: string;
    image: string;
};
