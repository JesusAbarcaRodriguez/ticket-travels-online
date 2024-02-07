import type { NextApiRequest, NextApiResponse } from "next";
import { notAllowedResponse } from "@/root/api/responses";
import { uploadPDF } from "@/dataBase";

const uploadPDFs = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const base64 = (await req.body.base64) as string;
        const ticket = req.body.ticket as string;

        if (!base64 || !ticket) {
            return res.status(500).json({ message: "error" });
        }

        const response = await uploadPDF({ ticket, base64 });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    POST: (_req: NextApiRequest, res: NextApiResponse) => uploadPDFs(_req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
