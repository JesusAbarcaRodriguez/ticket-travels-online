import { Formik, Form } from "formik";
import Link from "next/link";
import { Route } from "@/root/types";
import { CustomInput } from "@/root/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomsSelectBuyForm from "./CustomsSelectBuyForm";

interface BuyFormProps {
    initialValues: {
        route: string;
        date: string;
        time: string;
    };
    validationSchema: any;
    onSubmit: any;
    routeFoundList: Route[];
    handleRouteSelectChange: any;
    handleScheduleSelectChange: any;
    routeSelect: Route;
}
export default function BuyForm({ initialValues, validationSchema, onSubmit, routeFoundList, handleRouteSelectChange, routeSelect }: BuyFormProps) {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <div className="border-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 flex flex-col justify-center items-center w-2/4 p-4 h-auto mb-60 m-10">
                <h1 className="text-2xl font-bold mb-4 text-center">Purchase Form</h1>
                <Form className="flex flex-col justify-center w-full">
                    <div className="max-h-96">
                        <CustomsSelectBuyForm routeFoundList={routeFoundList} handleRouteSelectChange={handleRouteSelectChange} routeSelect={routeSelect} initialValues={initialValues} />
                        <CustomInput label="Date:" name="date" inputType="date" />
                        <div className="flex justify-between">
                            <div className="flex justify-between">
                                <Link href="/" className="bg-gray-900 m-4 p-2 rounded-lg text-white text-sm sm:text-base">
                                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                    Back
                                </Link>
                            </div>
                            <div className="flex justify-between">
                                <button type="submit" className="bg-gray-900 m-4 p-2 rounded-lg text-white text-sm sm:text-base">
                                    Next <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Form>
                <div className=" justify-center items-center  w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full w-1/12"></div>
                </div>
            </div>
        </Formik>
    );
}
