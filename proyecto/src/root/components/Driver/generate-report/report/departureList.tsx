import { Departure } from "@/root/types";

interface DepartureListProps {
    departure: Departure;
    seatAvailability: any;
}
export function DepartureList({ departure, seatAvailability }: DepartureListProps) {
    return (
        <div>
            <li>Date: {departure.departureDate}</li>
            <li>Departure Time: {departure.departureTime}</li>
            <li>Count of seats: {departure.seats.length}</li>
            <li>Seats Sold: {seatAvailability.soldSeats}</li>
            <li>Seats available: {seatAvailability.availableSeats}</li>
            <li>Bus Number: {departure.schedule.bus.busNumber}</li>
            <li>Plate Number: {departure.schedule.bus.plateNumber}</li>
            <li>Driver Name: {departure.schedule.driverId.name}</li>
        </div>
    );
}
