import { Bus } from "@/root/types";
import axios from "axios";

async function registerBus(bus: Bus) {
    const response = await axios.post("/api/buses", {
        bus: bus,
    });
    return response;
}
async function getBuses() {
    const response = await axios.get("/api/buses");
    const { data } = response;
    const newBuses = data.map((busData: Bus) => ({
        ...busData,
    }));
    return newBuses as Bus[];
}
export const busesProvider = {
    getBuses,
    registerBus,
};
