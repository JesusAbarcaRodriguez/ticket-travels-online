import axios, { AxiosError } from "axios";

const recovery = async (email: string) => {
    try {
        const response = await axios.post("/api/auth/recoveryPass", {
            email: email,
        });

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 401) {
            }
        }
    }
};

export const recoveryProvider = {
    recovery,
};
