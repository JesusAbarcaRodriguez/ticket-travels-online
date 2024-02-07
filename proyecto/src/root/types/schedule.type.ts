import { Bus } from "./Bus.type";
import { User } from "./User.type";

export type Schedule = {
    bus: Bus;
    departureTime: string;
    driverId: User;
};
