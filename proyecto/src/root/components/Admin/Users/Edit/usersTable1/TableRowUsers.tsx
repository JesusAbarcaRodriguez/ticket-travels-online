import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { User } from "@/root/types";
import Link from "next/link";

interface TableRowProps {
    user: User;
    handleUserEdit: (user: User) => void;
    handleUserDelete: (user: User) => void;
}

export const TableRowUsers: React.FC<TableRowProps> = ({ user, handleUserEdit, handleUserDelete }) => {
    return (
        <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-300 dark:hover:bg-gray-600">
            <td className="px-2 sm:px-6 py-4 w-full sm:w-1/6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name}</td>
            <td className="px-2 sm:px-6 py-4 hidden sm:table-cell w-1/12">{user.type}</td>
            <td className="px-2 sm:px-6 py-4 hidden sm:table-cell w-1/12">
                <Link href={`tel:${user.contact}`}>{user.contact}</Link>
            </td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <div className="flex justify-center sm:justify-start">
                    <div className="hidden sm:block">
                        <Link href={`mailto:${user.mail}`}>@{user.mail.split("@")[0]}</Link>
                    </div>
                    <div className="hidden sm:block">
                        <Link href={`mailto:${user.mail}`}>@{user.mail.split("@")[1]}</Link>
                    </div>
                </div>
            </td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <button onClick={() => handleUserEdit(user)} className="mx-2 sm:mx-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 sm:px-5 py-2 text-center mb-2 md:mb-0">
                    <FontAwesomeIcon className="mr-1" icon={faEdit} />
                    Edit
                </button>
            </td>
            <td className="px-2 sm:px-6 py-4 w-1/2 sm:w-1/5">
                <button onClick={() => handleUserDelete(user)} className="mx-2 sm:mx-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 sm:px-5 py-2 text-center mb-2 md:mb-0">
                    <FontAwesomeIcon className="mr-1" icon={faTrash} />
                    Delete
                </button>
            </td>
        </tr>
    );
};
