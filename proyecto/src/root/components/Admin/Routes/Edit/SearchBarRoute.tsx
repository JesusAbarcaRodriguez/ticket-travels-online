import { searchRoutes } from "@/root/redux";
import React, { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";

const SearchBarRoute = () => {
    const dispatch = useDispatch();
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            const place = event.target.value;
            if (place.length >= 3) {
                dispatch(searchRoutes(place));
            }
        }, 1000);
    };

    return (
        <div>
            <input type="text" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User" onChange={onQueryChanged} />
        </div>
    );
};

export default SearchBarRoute;
