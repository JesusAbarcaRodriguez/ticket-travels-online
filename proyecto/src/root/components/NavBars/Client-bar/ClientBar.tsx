import { faClock, faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../NavBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ClientBar() {
    const location = useRouter();
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    const menuItems = [
        { text: "Home", link: "/home", icon: faHome, className: `p-3 text-white` },
        { text: "Schedules", link: "/home/client/schedules", icon: faClock, className: "p-3 text-white" },
        { text: "Buy Tickets", link: "/home/client/buy-page", icon: faTicket, className: `${currentPath === "/home" || currentPath === "/home/client/schedules" ? " uppercase text-black p-3 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center animate-bounce" : "p-3 text-white"}` },
    ];

    return <NavBar menuItems={menuItems} isUser={false} />;
}
