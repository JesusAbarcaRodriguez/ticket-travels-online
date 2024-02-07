import React from "react";
import { Formik, Form } from "formik";
import { LayoutAdmin } from "@/Layout";
import { CustomInput } from "../../Formik";
import { busMessage } from "@/schemas";
import { busToRegister } from "@/root/redux/thunks/buses-thunk";
import { useDispatch } from "react-redux";

interface FormValues {
    plateNumber: string;
    busNumber: string;
}
export default function BusForm() {
    const dispatch = useDispatch();
    let initialValues: FormValues = {
        plateNumber: "",
        busNumber: "",
    };
    const handleSubmit = async (values: FormValues) => {
        const { plateNumber, busNumber } = values;
        const bus = {
            id: "",
            plateNumber,
            busNumber,
        };

        dispatch(busToRegister(bus));
    };
    return (
        <LayoutAdmin>
            <main className="h-screen bg-gradient-to-br from-slate-300 to-white py-8">
                <Formik initialValues={initialValues} validationSchema={busMessage} onSubmit={handleSubmit}>
                    <div className="  flex flex-col justify-center items-center  h-screen w-screen p-10">
                        <Form className="border-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 p-4 w-3/4">
                            <h1 className="text-center text-2xl font-bold m-4 pb-12">Register Bus</h1>
                            <div className="w-full flex flex-col mt-4 mx-auto">
                                <CustomInput label="Plate Number:" name="plateNumber" inputType="text" />
                                <CustomInput label="Bus Number:" name="busNumber" inputType="number" />
                            </div>
                            <div className="w-full mt-4 flex justify-center">
                                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                                    Register
                                </button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </main>
        </LayoutAdmin>
    );
}
