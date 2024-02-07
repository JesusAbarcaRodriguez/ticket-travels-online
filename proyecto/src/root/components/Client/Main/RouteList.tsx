import { selectRoutes, setRouteSelect } from "@/root/redux";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Route } from "@/root/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function RouteList() {
    const dispatch = useDispatch();
    const routeFoundList = useSelector(selectRoutes);
    const router = useRouter();

    const handleBuyClick = (route: Route) => {
        dispatch(setRouteSelect(route));
        router.push("/home/client/buy-page");
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="h-auto w-full overflow-x-auto overflow-y-scroll max-h-96">
            <table className="md:w-full lg:w-full w-full sm:w-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="rounded-lg text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 sm:px-6 py-3 text-center ">
                            Start Route
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3 text-center">
                            End Route
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-3 text-center hidden sm:table-cell">
                            Cost
                        </th>
                        <th scope="col" className="px-4 sm:px-6 py-6  text-center">
                            Buy
                        </th>
                    </tr>
                </thead>
                <tbody className="h-full w-full overflow-y-scroll">
                    {routeFoundList.map((route, index) => (
                        <tr key={index} className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 dark:hover:bg-gray-600">
                            <td className=" text-center sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{route.startPlace}</td>
                            <td className=" text-center sm:px-6 py-4">{route.destinationPlace}</td>
                            <td className=" text-center sm:px-6 py-4 hidden sm:table-cell">{"$" + route.price}</td>
                            <td className=" text-center sm:px-6 py-2">
                                <button className="p-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm   py-2 text-center mb-2 md:mb-0" onClick={() => handleBuyClick(route)}>
                                    <FontAwesomeIcon className="mr-1" icon={faShoppingCart} />
                                    Buy
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
}
