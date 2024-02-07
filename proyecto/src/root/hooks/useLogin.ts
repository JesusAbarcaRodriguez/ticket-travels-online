import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "@/root/redux";
type UserType = "driver" | "admin" | "";

export default function useLogin() {
    const userLogin = useSelector(selectLogin);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const userTypeRoutes: Record<string, string> = {
            driver: "/private/driver",
            admin: "/private/admin",
            "": "/private",
        };

        const route = userTypeRoutes[userLogin.type];

        if (route) {
            router.push(route);
        }
    }, [dispatch, router, userLogin]);
}
