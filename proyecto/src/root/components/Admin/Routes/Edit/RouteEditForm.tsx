import { Formik, Form } from "formik";
import { Route } from "@/root/types";
import { routeEditMessage } from "@/schemas";
import { CustomInput } from "@/root/components";
import { routeToEdit, selectRouteSelect } from "@/root/redux";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
interface FormValues {
    duration: string;
    price: string;
}
interface RouteEditCloseProps {
    close: () => void;
}
function RouteEditForm({ close }: RouteEditCloseProps) {
    const dispatch = useDispatch();
    const selectedRoute: Route = useSelector(selectRouteSelect);
    const [showEdit, setShowEdit] = useState(true);
    const initialValues: FormValues = {
        duration: selectedRoute.duration,
        price: selectedRoute.price,
    };
    const handleSubmit = async (values: FormValues) => {
        const { duration, price } = values;
        const routeEdit: Route = { ...selectedRoute, duration, price };
        try {
            await dispatch(routeToEdit(routeEdit));
            toast.success("Route edited successfully");
        } catch (error) {
            toast.error("Error editing the route");
        }
    };
    function handleClose() {
        setShowEdit(false);
        close();
    }
    return (
        <>
            {showEdit && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="shadow-drop-bottom-right bg-white p-8 rounded-md relative border border-black text-center w-2/4 h-3/6">
                        <button className="absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Formik initialValues={initialValues} validationSchema={routeEditMessage} onSubmit={handleSubmit}>
                            <div className="block rounded-lg m-2 items-center justify-center">
                                <h1 className="text-2xl font-bold mb-4">
                                    Edit Route {selectedRoute.startPlace}-{selectedRoute.destinationPlace}
                                </h1>
                                <Form className="w-full  flex flex-col items-center justify-center ">
                                    <CustomInput label="Duration:" name="duration" inputType="text" placeholder={selectedRoute.duration} />
                                    <CustomInput label="Price:" name="price" inputType="text" placeholder={selectedRoute.price} />
                                    <div className=" w-2/4 items-center justify-between flex">
                                        <button type="submit" className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                            Cancel
                                        </button>
                                        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                            Edit
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </Formik>
                    </div>
                </div>
            )}
        </>
    );
}
export default RouteEditForm;
