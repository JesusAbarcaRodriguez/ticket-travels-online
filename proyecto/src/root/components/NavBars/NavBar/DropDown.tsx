import { selectLogin, setAuthenticated } from "@/root/redux";
import { User } from "@/root/types";
import { faDoorOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
const DropdownButton: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const userLogin = useSelector(selectLogin);
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleSingOut = () => {
        Cookies.remove("myToken");
        dispatch(setAuthenticated({} as User));
        router.push("/private");
    };
    return (
        <div className="inline-block text-left">
            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className="flex items-center">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-black mr-2 " />
                    {userLogin.name}{" "}
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </motion.div>
            {isOpen && (
                <div id="dropdown" className=" bg-white  rounded-lg  w-44 dark:bg-gray-700 -ml-4 flex items-center  absolute z-10  divide-y divide-gray-100 shadow">
                    <ul className="flex justify-center py-2 text-sm text-red font-bold " aria-labelledby="dropdownDefaultButton">
                        <button onClick={handleSingOut} className="text-red-600 ml-4 flex justify-center items-center">
                            Sign Out
                            <FontAwesomeIcon icon={faDoorOpen} className="w-4 h-4 text-red ml-2" />
                        </button>
                    </ul>
                </div>
            )}
        </div>
    );
};
export default DropdownButton;