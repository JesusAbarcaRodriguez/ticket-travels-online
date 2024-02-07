import jwt, { Secret } from "jsonwebtoken";
export  const signToken = (type: string, id: string) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("No JWT Seed - Check Environment Variables");
    }
    return jwt.sign({ type, id }, process.env.JWT_SECRET_SEED as Secret, { expiresIn: "15m" });
};
