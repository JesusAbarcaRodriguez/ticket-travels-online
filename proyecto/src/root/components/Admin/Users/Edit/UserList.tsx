import { useState } from "react";
import { User } from "@/root/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { UsersTable } from "@/root/components";
import SearchBar from "./SearchBarUser";

interface UserListProps {
    users: User[];
}

export default function UserList({ users }: UserListProps) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="rounded-lg border-slate-300 shadow-lg shadow-slate-300  w-full h-[500px]">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative m-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <SearchBar />
            </div>
            <div className="flex justify-center items-center relative overflow-auto ">{users.length > 0 ? <UsersTable usersFoundList={users} /> : <div className="w-[500px] h-full m-4 font-bold flex justify-center items-center text-center text-green-600 mt-4 animate-pulse animate-faster p-4 text-4xl">User list here!</div>}</div>
        </div>
    );
}
