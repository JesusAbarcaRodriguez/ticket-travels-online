import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserSelect, userToDelete } from "@/root/redux";
import { User } from "@/root/types";
import { toast } from "react-hot-toast";
import { TableHeaderUsers, TableRowUsers, UserForm } from "@/root/components";
interface UsersTableProps {
    usersFoundList: User[];
}
export const UsersTable: React.FC<UsersTableProps> = ({ usersFoundList }) => {
    const dispatch = useDispatch();
    const [showEdit, setShowEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const handleUserDelete = async (user: User) => {
        try {
            await dispatch(userToDelete(user, usersFoundList));
            toast.success("User deleted successfully");
        } catch (error) {
            toast.error("Error deleting the user");
        }
    };

    const handleUserEdit = (user: User) => {
        dispatch(setUserSelect(user));
        setSelectedUser(user);
        setShowEdit(true);
    };

    const handleClose = () => {
        setSelectedUser(null);
        setShowEdit(false);
    };

    return (
        <div className="m-4 h-full w-full relative shadow-md sm:rounded-lg overflow-y-scroll max-h-96">
            {showEdit && <UserForm close={handleClose} />}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHeaderUsers />
                    <tbody className="h-full w-full overflow-y-scroll">
                        {usersFoundList.map((user, index) => (
                            <TableRowUsers key={index} user={user} handleUserEdit={handleUserEdit} handleUserDelete={handleUserDelete} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
