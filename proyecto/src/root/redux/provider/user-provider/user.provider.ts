import { User } from "@/root/types";
import axios from "axios";

export const getUsers = async () => {
    const response = await axios.get("/api/users");

    if (!(response.status >= 200 && response.status < 300)) {
        throw new Error("Network response was not ok");
    }

    const { data } = response;

    const user = data.map((user: User) => ({
        ...user,
    }));

    return user;
};
export const searchUser = async (name: string) => {
    const response = await axios.get("/api/users/by-name", {
        params: {
            name: name,
        },
    });
    return response;
};
export const getDrivers = async () => {
    const response = await axios.get(`/api/users/by-type/`, {
        params: {
            type: "driver",
        },
    });
    if (!(response.status >= 200 && response.status < 300)) {
        throw new Error("Network response was not ok");
    }
    const { data } = response;
    const driver = data.map((driver: User) => ({
        ...driver,
    }));
    return driver;
};
const deleteUser = async (user: User) => {
    await axios.delete(`/api/auth/delete/${user.uid}`);
};
const editUser = async (user: User) => {
    await axios.put("/api/users", { user: user });
};
const createUser = async (email: string, password: string, username: string, contact: string, type: string) => {
    const response = await axios.post("/api/auth/register", {
        email: email,
        password: password,
        username: username,
        contact: contact,
        type: type,
    });
    return response;
};
export const userProvider = {
    searchUser,
    getUsers,
    createUser,
    editUser,
    deleteUser,
    getDrivers,
};
