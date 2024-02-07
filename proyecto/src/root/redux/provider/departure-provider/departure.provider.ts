import { Departure, Schedule, Seat } from "@/root/types";
import axios from "axios";

const getSeats = async (id: string, cantSeats: number): Promise<number[]> => {
    const response = await axios.get("/api/departures/seats", {
        params: {
            id: id,
            cantSeats: cantSeats,
        },
    });
    return response.data;
};

const getDepartures = async (driver: string, date: string) => {
    const response = await axios.get("/api/departures/byDateDriver", {
        params: {
            driver: driver,
            date: date,
        },
    });

    if (!(response.status >= 200 && response.status < 300)) {
        throw new Error("Network response was not ok");
    }
    const { data } = response;
    const departures = data.map((departure: Departure) => ({
        ...departure,
    }));
    return departures;
};

const blockSeats = async (id: string, seat: Seat) => {
    const response = await axios.get("/api/departures/seats", {
        params: {
            id: id,
            seatNumber: seat.number,
            seatState: seat.state,
        },
    });
    return response;
};
const createDeparture = async (routeId: string, date: string, schedule: Schedule) => {
    const response = await axios.get("/api/departures", {
        params: {
            routeId: routeId,
            date: date,
            schedule: JSON.stringify(schedule),
        },
    });

    return response.data as Departure;
};
const updateDeparture = async (departure: Departure) => {
    const response = await axios.put("/api/departures", {
        departure: departure,
    });

    return response.data as Departure;
};
const soldSeats = async (id: string, seats: number[]): Promise<number[]> => {
    const response = await axios.put("/api/departures/seats", {
        id: id,
        seats: seats,
    });
    return response.data;
};

export const departureProvider = {
    getSeats,
    getDepartures,
    soldSeats,
    createDeparture,
    blockSeats,
    updateDeparture,
};
