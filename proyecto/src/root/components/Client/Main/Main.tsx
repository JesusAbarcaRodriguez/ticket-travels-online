import SliderComponent from "./SliderPopularRoute";
import RouteList from "./RouteList";
import { useSelector } from "react-redux";
import { useRoute } from "@/root/hooks";
import { selectRoutes } from "@/root/redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
    useRoute();
    const routeFoundList = useSelector(selectRoutes);

    return (
        <main className="z-auto  w-screen">
            <div className="pb-4 xs:max-w-xs m-auto mb-10 pt-top px-4 flex flex-col justify-center items-center w-3/4">
                <h2 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">¡Discover our popular routes!</h2>
                <p className="text-justify mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-4 dark:text-gray-400">On our website, we offer a wide selection of popular bus routes for you to explore and enjoy. Our popular bus routes are designed to provide you with convenience and fun, with strategic stops at points of interest and noteworthy attractions. Don{"'"}t miss the opportunity to explore new destinations and connect with people from around the world.</p>
                <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faRoute} className="mr-2 -mt-2 text-3xl text-black" />
                    <h3 className="text-center mb-4 text-2xl font-bold tracking-tight leading-none text-black md:text-3xl lg:text-4xl  font-cursive">Route List</h3>
                </div>
                <div className="flex-auto w-full sm:w-3/5 justify-center">
                    <SliderComponent destinations={routeFoundList} />
                </div>
                <div className="relative overflow-auto shadow-md rounded-lg w-full">
                    <RouteList />
                </div>
            </div>
        </main>
    );
}
