import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "@/root/types";
import { routeToCreate, selectRouteToRegister } from "@/root/redux";
import { LayoutAdmin } from "@/Layout";
import ScheduleList from "./ScheduleList";
import ScheduleForm from "./ScheduleForm";
import { selectSchedules } from "@/root";
import { startGetBuses } from "@/root/redux/thunks/buses-thunk";
import { useRouter } from "next/router";
export default function SchedulePage() {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            dispatch(startGetBuses());
        };
        fetchData();
    }, [dispatch]);
    const routeToRegister = useSelector(selectRouteToRegister);
    const schedulesFoundList = useSelector(selectSchedules);
    const handleChange = () => {
        const routeRegister: Route = { ...routeToRegister, schedules: schedulesFoundList };
        dispatch(routeToCreate(routeRegister));
        router.push("/private/admin/register-routes");
    };
    return (
        <LayoutAdmin>
            <div className="h-full p-10 m-4 w-full justify-center items-center block">
                <h2 className="text-slate-700 font-semibold mx-auto text-center md:text-2xl lg:text-3xl"> Schedules List </h2>
                <p className="text-slate-500 font-bold mt-5 text-center mb-10">
                    {" "}
                    Manage your <span className="text-indigo-600 font-bold text-lg">Schedules</span>
                </p>
                <div className="block mb-5 md:flex  w-full justify-center">
                    <ScheduleForm />
                    <ScheduleList />
                </div>
                <div className="flex justify-center m-4 ">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleChange}>
                        {" "}
                        Save Route{" "}
                    </button>
                </div>
            </div>
        </LayoutAdmin>
    );
}
