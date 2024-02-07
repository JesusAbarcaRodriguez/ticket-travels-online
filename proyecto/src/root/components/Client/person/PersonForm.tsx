import { Form, Formik } from "formik";
import { CustomInput } from "../../Formik";
import Link from "next/link";
import { useState } from "react";
import { BusSeatingChart } from "../select-seats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCouch } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

interface PersonFormProps {
    initialValues: {
        name: string;
        surname: string;
        email: string;
        countTickets: string;
    };
    handleSubmit: any;
    personMessage: any;
}

export default function PersonForm({ initialValues, personMessage, handleSubmit }: PersonFormProps) {
    const [showSeats, setShowSeats] = useState(false);
    const [seatsSelected, setSeatsSelected] = useState(false);

    const handleCloseSeats = () => {
        setShowSeats(false);
    };

    const handleSeatSelection = (selected: boolean) => {
        setSeatsSelected(selected);
    };

    const handleNextButtonClick = () => {
        if (!seatsSelected) {
            toast.error("You must select at least one seat");
            return;
        }
    };

    return (
        <main className=" items-center w-full h-ful flex flex-col sm:mt-8 ">
            <div className="w-52 flex flex-row items-center justify-center bg-slate-200 border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                <p>Step 2 of 4</p>
            </div>
            <Formik initialValues={initialValues} validationSchema={personMessage} onSubmit={handleSubmit}>
                <div className="border-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 flex flex-col justify-center items-center  w-2/4 p-4 h-auto mb-60 m-10">
                    <h1 className="text-2xl font-bold mb-4 text-center">Client Form</h1>
                    <Form className="flex flex-col justify-center w-full">
                        <CustomInput label="Name:" name="name" inputType="text" />
                        <CustomInput label="Surname:" name="surname" inputType="text" />
                        <CustomInput label="Email" inputType="email" name="email" />
                        <div className="flex flex-col justify-center items-center">
                            <div className="mt-4 justify-center">
                                <Link href="" className="bg-green-600 py-2 px-4 rounded-lg flex items-center justify-center text-white hover:bg-green-500" onClick={() => setShowSeats(true)}>
                                    {" "}
                                    <FontAwesomeIcon icon={faCouch} className="mr-2" /> Select Seats{" "}
                                </Link>
                            </div>
                            {showSeats && <BusSeatingChart onClose={handleCloseSeats} onSeatSelection={handleSeatSelection} />}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex justify-between">
                                <Link href="/home/client/buy-page" className="bg-gray-900 m-4 p-2 rounded-lg text-white text-sm sm:text-base">
                                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                    Back
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <button type={seatsSelected ? "submit" : "button"} className="bg-gray-900 m-4 p-2 rounded-lg text-white text-sm sm:text-base" onClick={handleNextButtonClick}>
                                    {" "}
                                    Next <FontAwesomeIcon icon={faArrowRight} className="ml-2" />{" "}
                                </button>
                            </div>
                        </div>
                    </Form>
                    <div className="justify-center items-center w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-2/4"></div>
                    </div>
                </div>
            </Formik>
        </main>
    );
}
