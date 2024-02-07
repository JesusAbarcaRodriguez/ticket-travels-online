import React from "react";

export const TableHeader: React.FC = () => {
    return (
        <thead className="rounded-lg h-1/4 text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-2 sm:px-6 py-3">
                    StartPlace
                </th>
                <th scope="col" className="px-2 sm:px-6 py-3">
                    End Of Route
                </th>
                <th scope="col" className="px-2 sm:px-6 py-3 hidden sm:table-cell">
                    Route Type
                </th>
                <th scope="col" className="px-2 sm:px-12 py-3 hidden sm:table-cell">
                    Duration
                </th>
                <th scope="col" className="px-2 sm:px-12 py-3 hidden sm:table-cell">
                    Price
                </th>
                <th scope="col" className="px-2 sm:px-12 py-3">
                    EDIT
                </th>
                <th scope="col" className="px-2 sm:px-12 py-3">
                    DELETE
                </th>
            </tr>
        </thead>
    );
};
