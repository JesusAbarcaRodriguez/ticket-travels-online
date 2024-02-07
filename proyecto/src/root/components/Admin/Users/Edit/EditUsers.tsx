import { SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import UserList from "./UserList";
import { selectUsers } from "@/root/redux";
import { LayoutAdmin } from "@/Layout";

export default function EditUserPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const userFoundList = useSelector(selectUsers);

    const handleSearchTermChange = (event: { target: { value: SetStateAction<string> } }) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = userFoundList.filter((user: { name: string; mail: string }) => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.mail.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <LayoutAdmin>
            <div className=" flex flex-col items-center min-h-screen w-full h-[550px] md:w-2/3">
                <h1 className="text-center text-3xl font-bold mb-6 text-black mt-3">Users List</h1>
                <UserList users={filteredUsers} />
            </div>
        </LayoutAdmin>
    );
}
