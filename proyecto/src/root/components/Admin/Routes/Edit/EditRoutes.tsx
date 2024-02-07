import { SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { selectRoutes } from "@/root/redux";
import { LayoutAdmin } from "@/Layout";
import { Loading, RouteListAdmin } from "@/root/components";
import { useRoute } from "@/root/hooks";

export default function EditRoutePage() {
    useRoute();
    const [searchTerm, setSearchTerm] = useState("");
    const routeFoundList = useSelector(selectRoutes);

    const handleSearchTermChange = (event: { target: { value: SetStateAction<string> } }) => {
        setSearchTerm(event.target.value);
    };
    const filteredRoutes = routeFoundList.filter((route: { startPlace: string }) => {
        return route.startPlace.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
        <LayoutAdmin>
            <div className="flex flex-col items-center mb-20 w-full md:w-2/3">
                <h1 className="text-center text-3xl font-bold mb-6 text-black mt-3">Routes List</h1>
                <div className="flex flex-col items-center mb-2 text-black m-4 w-2/3">
                    <label htmlFor="searchTerm" className="block font-bold text-sm">
                        Search:
                    </label>
                </div>
                <RouteListAdmin routes={filteredRoutes} />
            </div>
        </LayoutAdmin>
    );
}
