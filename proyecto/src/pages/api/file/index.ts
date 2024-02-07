import type { NextApiRequest, NextApiResponse } from "next";
import { notAllowedResponse } from "@/root/api/responses";
import { uploadImage } from "@/dataBase";

const uploadImages = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const file = (await req.body.file) as string;
        const route = req.body.route as string;

        if (!file || !route) {
            return res.status(500).json({ message: "error" });
        }

        const response = await uploadImage(route, file);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const handlers = {
    POST: (_req: NextApiRequest, res: NextApiResponse) => uploadImages(_req, res),
};
export default async function authorsController(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const handler = handlers[method as keyof typeof handlers](req, res);
    return handler! || notAllowedResponse(res, method!);
}
