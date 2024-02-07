import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Loading } from "../../LoadingScreen";
import { contactMessage } from "@/schemas";
import { CustomInput, CustomTextArea } from "../../Formik";
import { useDispatch } from "react-redux";
import { sendEmail } from "@/root/redux";

interface AboutProps {
    onClose: () => void;
}
interface FormValues {
    name: string;
    email: string;
    body: string;
}

export default function ContactPage({ onClose }: AboutProps) {
    const [showLoading, setShowLoading] = useState(false);
    const [showContact, setShowContact] = useState(true);
    const dispatch = useDispatch();

    const initialValues: FormValues = {
        name: "",
        email: "",
        body: "",
    };

    const handleSubmit = async (values: FormValues, { resetForm }: any) => {
        const { name, email, body } = values;
        const recipient = "busticketsuna@gmail.com";
        const subject = "Request for: " + name;
        const content = "Contact email: " + email + "\nMessage: " + body;
        dispatch(sendEmail(recipient, subject, content));
        setShowLoading(true);
        setTimeout(() => {
            setShowLoading(false);
            resetForm();
        }, 2000);
    };

    function handleClose() {
        setShowContact(false);
        onClose();
    }
    return (
        <>
            {showContact && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="bg-white rounded-md shadow-md max-w-lg mx-auto relative w-11/12">
                        <button className="absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black  hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Formik initialValues={initialValues} validationSchema={contactMessage} onSubmit={handleSubmit}>
                            <Form className="p-6 w-full max-w-lg flex flex-col items-center justify-center">
                                <h1 className="text-xl font-bold mb-4 text-center">Contact Us</h1>
                                <CustomInput label="Name" name="name" inputType="text" placeholder="Your name" className="mb-4" />
                                <CustomInput label="Email" name="email" inputType="email" placeholder="Your email" className="mb-4" />
                                <CustomTextArea label="Message" name="body" placeholder="Your message" className="mb-6" />
                                <button type="submit" className="bg-gray-900 py-2 px-6  rounded-lg text-white font-bold hover:bg-gray-800 transition-colors duration-200">
                                    Send
                                </button>
                                {showLoading && <Loading />}
                            </Form>
                        </Formik>
                    </div>
                </div>
            )}
        </>
    );
}
