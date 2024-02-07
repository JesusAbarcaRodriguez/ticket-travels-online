import type { NextApiRequest, NextApiResponse } from "next";
import { notAllowedResponse } from "@/root/api/responses";
import { lockSeat, soldSeats, unlockSeat } from "@/dataBase";

const getSeatsNumber = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const id = String(req.query.id);
        const seatNumber = Number(req.query.seatNumber);
        const seatState = String(req.query.seatState);
        if (seatState === "blocked") {
            const response = await unlockSeat(id, seatNumber);
            return res.status(200).json(response);
        } else if (seatState === "available") {
            const response = await lockSeat(id, seatNumber);
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
const updateSeatsNumber = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const id = String(req.body.id);
        const seats: number[] = req.body.seats.map(Number);

        const response = await soldSeats(id, seats);
        if (response) {
            return res.status(200).json(response);
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    GET: (_req: NextApiRequest, res: NextApiResponse) => getSeatsNumber(_req, res),
    PUT: (_req: NextApiRequest, res: NextApiResponse) => updateSeatsNumber(_req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
