import { faHome, faCheckDouble, faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../NavBar";
export default function DriverBar() {
    const menuItems = [
        { text: "Home", link: "/private/driver/", icon: faHome, className: "text-white" },
        { text: "Validate Tickets", link: "/private/driver/validate", icon: faCheckDouble, className: "text-white" },
        { text: "Generate Report", link: "/private/driver/generate-report", icon: faFileArchive, className: "text-white" },
    ];
    return <NavBar menuItems={menuItems} isUser={true}></NavBar>;
}
