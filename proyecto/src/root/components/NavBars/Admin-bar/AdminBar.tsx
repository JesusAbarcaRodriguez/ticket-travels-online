import { faBus, faHome, faRoute, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../NavBar";

export default function AdminBar() {
    const menuItems = [
        { text: "Home            ", link: "/private/admin", icon: faHome, className: "text-white" },
        { text: "Register Users  ", link: "/private/admin/register-users", icon: faUser, className: "text-white" },
        { text: "Edit Users      ", link: "/private/admin/edit-users", icon: faUser, className: "text-white" },
        { text: "Register Routes ", link: "/private/admin/register-routes", icon: faRoute, className: "text-white" },
        { text: "Edit Routes     ", link: "/private/admin/edit-routes", icon: faRoute, className: "text-white" },
        { text: "Register Buses  ", link: "/private/admin/register-buses", icon: faBus, className: "text-white" },
    ];

    return <NavBar menuItems={menuItems} isUser={true}></NavBar>;
}
