import LayoutClient from "@/Layout/LayoutClient";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectRoutes } from "@/root/redux";

import Hours from "./Hours";
export default function Schedules() {
    const [isMessageDisplayed, setIsMessageDisplayed] = useState(false);
    const routeFoundList = useSelector(selectRoutes);
    useEffect(() => {
        setTimeout(() => {
            setIsMessageDisplayed(true);
        }, 3000);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setIsMessageDisplayed(false);
        }, 6000);
    }, [isMessageDisplayed]);

    return (
        <LayoutClient>
            <section className="h-full pb-4 mx-3 w-10/12 ">
                <div className="container -mt-top my-20 ">
                    <h1 className="text-center font-bold text-5xl mb-3">Schedules</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center sm:grid-cols-2 ">
                        {routeFoundList.map((item, index) => {
                            return <Hours key={index} item={item} />;
                        })}
                    </div>
                </div>
            </section>
        </LayoutClient>
    );
}
