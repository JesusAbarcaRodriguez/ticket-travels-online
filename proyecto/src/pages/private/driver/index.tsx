import { LayoutDriver } from "@/Layout";
import { RouteDriver } from "@/root/components";
import { faCheckDouble, faFileArchive } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
    { text: "Validate Tickets", link: "/private/driver/validate", icon: faCheckDouble, className: "text-white" },
    { text: "Generate Report", link: "/private/driver/generate-report", icon: faFileArchive, className: "text-white" },
];
export default function Home() {
    return (
        <LayoutDriver>
            <RouteDriver menuItems={menuItems} />
        </LayoutDriver>
    );
}
