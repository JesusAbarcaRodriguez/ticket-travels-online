import { userRegister } from "@/dataBase";
import { User } from "@/root/types/User.type";
import { NextApiRequest, NextApiResponse } from "next";

export default async function create(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { email, password, username, contact, type } = req.body;
            if (!email || !password || !username || !contact || !type) {
                throw new Error("Please provide email, username, password, contact, type");
            }
            const additionalFields: User = {
                uid: "",
                name: username,
                type: type,
                contact: contact,
                mail: email,
            };
            const response = await userRegister(email, username, password, additionalFields);
            if (response === "User created") {
                return res.status(200).json(response);
            }
            if (response === "the user was already registered") {
                return res.status(201).json(response);
            }
        } catch (error) {
            return res.status(500).json({ message: error });
        }
    }
    return res.status(405).json({ message: "Method not allowed" });
}
