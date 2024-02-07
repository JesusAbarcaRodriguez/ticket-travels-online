import { Seat } from "./Seat.type";

export function generateInitialSeats(): Seat[] {
    const initialSeats: Seat[] = [
        { number: 1, state: "available", timeBlock: 0 },
        { number: 2, state: "available", timeBlock: 0 },
    ];

    for (let i = 3; i <= 40; i++) {
        initialSeats.push({ number: i, state: "available", timeBlock: 0 });
    }

    return initialSeats;
}
