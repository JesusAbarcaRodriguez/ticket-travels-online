import { CustomInput, CustomSelect } from "@/root/components";
import { selectBuses, selectDrivers, setBusSelect } from "@/root/redux";
import { setSchedules } from "@/root/redux/reducer/schedule-reducer";
import { Bus, Schedule, User } from "@/root/types";
import { scheduleMessage } from "@/schemas";
import { Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface FormValues {
    departureTime: string;
    driverId: string;
    busNumber: string;
}

export default function ScheduleForm() {
    const dispatch = useDispatch();

    const userList = useSelector(selectDrivers);
    const busList = useSelector(selectBuses);
    const initialValues: FormValues = { departureTime: "", driverId: "", busNumber: "" };
    const handleSubmit = async (values: FormValues) => {
        const { departureTime, driverId, busNumber } = values;
        const foundBus = findBus(busNumber);
        const foundDriver = findDriver(driverId) as User;

        if (foundBus) {
            dispatch(setBusSelect(foundBus));
        }
        const schedule = { departureTime, driverId: foundDriver, bus: foundBus } as Schedule;

        dispatch(setSchedules(schedule));
    };
    const findBus = (selectBus: string): Bus | undefined => {
        return busList.find((busItem: Bus) => selectBus == busItem.busNumber);
    };

    const findDriver = (userSelect: string): User | undefined => {
        return userList.find((user: User) => userSelect == user.uid);
    };

    return (
        <div className="md:w-1/2 m-5  bg-gray-200 flex rounded-lg">
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={scheduleMessage}>
                <div className="w-full flex flex-col m-5 ">
                    <Form className=" w-full pb-5 ">
                        <h1 className="text-center text-2xl font-bold  pb-12"> Register Schedule </h1>
                        <div className="w-full flex flex-col">
                            <CustomInput label="Hora de salida:" name="departureTime" inputType="time" />
                            <CustomSelect label="Driver:" name="driverId" placeholder="Select a driver">
                                {!initialValues.driverId ? <option value="">Select a driver</option> : null}
                                {userList
                                    .filter((user) => user.type === "driver")
                                    .map((user, index) => (
                                        <option key={index} value={user.uid}>
                                            {user.name}
                                        </option>
                                    ))}
                            </CustomSelect>
                            <CustomSelect label="Bus:" name="busNumber" placeholder="Select a bus">
                                {!initialValues.busNumber ? <option value="">Select a bus</option> : null}
                                {busList.map((bus: Bus, index: number) => (
                                    <option key={index} value={bus.busNumber}>
                                        {bus.busNumber}
                                    </option>
                                ))}
                            </CustomSelect>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" type="submit">
                                {" "}
                                Register{" "}
                            </button>{" "}
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}
