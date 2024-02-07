import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { v4 as uuidv4 } from "uuid";
import { LayoutAdmin } from "@/Layout";
import { registerUserMessage } from "@/schemas";
import { CustomInput, CustomSelect } from "@/root/components";
import { userToRegister } from "@/root/redux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
interface FormValues {
    email: string;
    username: string;
    contact: string;
    type: string;
}
export default function RegisterForm() {
    const dispatch = useDispatch();
    const initialValues: FormValues = {} as FormValues;
    const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { email, username, contact, type } = values;
        await dispatch(userToRegister(email, uuidv4(), username, contact, type));
    };
    return (
        <LayoutAdmin>
            <main className="  h-3/4 py-8 w-3/4 m-4">
                <Formik initialValues={initialValues} validationSchema={registerUserMessage} onSubmit={handleSubmit}>
                    <div className="border-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 flex flex-col bg-gradient-to-br from-slate-300 to-white justify-center items-center p-10 w-full py-20">
                        <Form className="w-3/4 ">
                            <h1 className="text-center text-2xl font-bold m-4 pb-12"> Register Users </h1>
                            <div className="w-full flex flex-col mt-4 mx-auto">
                                <CustomInput label="Email:" name="email" inputType="email" />
                                <CustomInput label="User:" name="username" inputType="text" />
                                <CustomInput label="Contact" name="contact" inputType="text" />
                                <CustomSelect label="Type user" name="type">
                                    {!initialValues.type ? <option value="">Select a type</option> : null}
                                    <option value="admin">Administrator</option>
                                    <option value="driver">Driver</option>
                                </CustomSelect>
                            </div>
                            <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className="w-full mt-4 flex justify-center">
                                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                                    {" "}
                                    Register{" "}
                                </button>
                            </motion.div>
                        </Form>
                    </div>
                </Formik>
            </main>
        </LayoutAdmin>
    );
}
