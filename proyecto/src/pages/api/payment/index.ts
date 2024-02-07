import { loadRoute, payRegister } from "@/dataBase";
import { notAllowedResponse } from "@/root/api/responses";
import type { NextApiRequest, NextApiResponse } from "next";


const postPay = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const pay = req.body.idPayment as string;
        if (!pay) {
            throw new Error("Error Pay");
        }
        const response = await payRegister(pay)
        return res.status(200).json({ message: response });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


const handlers = {
    POST: (req: NextApiRequest, res: NextApiResponse) => postPay(req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
