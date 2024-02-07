import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
interface MenuItem {
    text: string;
    link: string;
    icon?: IconProp;
}
interface AdminOptionProps {
    menuItems: MenuItem[];
}
const AdminOption = (props: AdminOptionProps) => {
    const { menuItems } = props;
    return (
        <div className="md:h-[570px] h-auto background-image w-full item-center flex  justify-center">
            <div className="m-10 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center sm:grid-cols-2">
                {menuItems.map((menuItem, index) => (
                    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className="items-center flex flex-row justify-center" key={index}>
                        <button className=" shadow-drop-bottom-right  hover:bg-blue-50 flex flex-col justify-center items-center border-4 border-gray p-6 md:p-3 lg:px-8 rounded-lg bg-white">
                            <div className="w-10 h-10 items-center justify-center item-center flex rounded-full bg-purple-100 text-blue-500 mb-4 border-2 border-blue-500">{menuItem.icon && <FontAwesomeIcon icon={menuItem.icon} className="w-6 h-6 text-blue-400" />}</div>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center"> {menuItem.text} </h2>
                            <div className="flex justify-center mt-4">
                                <Link href={menuItem.link} className="w-52 text-center  hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                                    {" "}
                                    Go{" "}
                                </Link>
                            </div>
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default AdminOption;
