import { CustomInput, CustomSelect } from "@/root/components";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
interface RoutFormProps {
    initialValues: {
        startPlace: string;
        destinationPlace: string;
        duration: string;
        price: string;
        routeType: string;
    };
    validationSchema: any;
    onSubmit: any;
}
export default function RouteForm({ initialValues, validationSchema, onSubmit }: RoutFormProps) {
    return (
        <div className=" h-3/4 py-8 w-3/4 m-4">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <div className="border-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 flex flex-col bg-gradient-to-br from-slate-300 to-white justify-center items-center p-10 w-full py-20">
                    <h1 className="text-2xl font-bold ">Register Route</h1>
                    <Form className="w-3/4">
                        <CustomInput label="Start of Route:" name="startPlace" inputType="text" />
                        <CustomInput label="End of Route:" name="destinationPlace" inputType="text" />
                        <CustomInput label="Approximate duration:" inputType="text" name="duration" />
                        <CustomInput label="Price:" inputType="number" name="price" />
                        <CustomSelect label="Route Type:" name="routeType" placeholder="Select a type">
                            <option value="">Select a type</option>
                            <option value="Normal">Normal</option>
                            <option value="Popular">Popular</option>
                        </CustomSelect>
                        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className="w-full mt-4 flex justify-center">
                            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                                {" "}
                                Register{" "}
                            </button>
                        </motion.div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}
