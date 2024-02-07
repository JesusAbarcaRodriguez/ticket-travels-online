import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

const login = async (email: string, password: string) => {
    try {
        const response = await axios.post("/api/auth/login", {
            email: email,
            password: password,
        });
        if (response.status === 200) {
            const user = response.data;
            return user;
        }
        if (response.status === 401) {
            return response;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 401) {
            }
        } else {
        }
    }
};

const loginUid = async (uid: string) => {
    const responseUser = await axios.post(`/api/users/${uid}`);
    Cookies.set("myToken", responseUser.data.token);
    return responseUser.data.user;
};

export const loginProvider = {
    login,
    loginUid,
};
