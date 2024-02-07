import { LayoutAdmin } from "@/Layout";
import { AdminOption } from "@/root/components";
import { faBus, faHome, faRoute, faUser } from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
    const menuItems = [
        { text: "Home", link: "/private/admin", icon: faHome },
        { text: "Register Users", link: "/private/admin/register-users", icon: faUser },
        { text: "Edit Users", link: "/private/admin/edit-users", icon: faUser },
        { text: "Register Routes", link: "/private/admin/register-routes", icon: faRoute },
        { text: "Edit Routes", link: "/private/admin/edit-routes", icon: faRoute },
        { text: "Register Buses", link: "/private/admin/register-buses", icon: faBus },
    ];

    return (
        <LayoutAdmin>
            <AdminOption menuItems={menuItems} />
        </LayoutAdmin>
    );
}
