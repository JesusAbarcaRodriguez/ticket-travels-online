import { Form, Formik } from "formik";
import Image from "next/image";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { loginMessage } from "@/schemas";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { recoveryPassword } from "@/root/redux";
import { toast } from "react-hot-toast";
import { CustomInput, Loading } from "@/root/components";
interface FormValues {
    email: string;
}
export default function PassRecovery() {
    const [showLoading, setShowLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const initialValues: FormValues = {
        email: "",
    };
    const handleSubmit = async (values: FormValues) => {
        const { email } = values;
        setShowLoading(true);
        dispatch(recoveryPassword(email));
        setShowLoading(false);
        setShowAlert(true);
        setTimeout(() => {
            toast.success("Email sent");
            router.push("/private");
        }, 2000);
    };
    const handleHome = () => {
        router.push("/");
    };
    return (
        <Formik initialValues={initialValues} validationSchema={loginMessage} onSubmit={handleSubmit}>
            <div className="flex justify-center items-center w-3/5 sm:w-1/2 md:w-2/4 lg:w-3/4 xl:w-full">
                <div className="w-full max-w-md flex justify-center items-center">
                    <div className="bg-slate-200 rounded-lg shadow-inner pltrb-11 flex flex-col justify-center items-center shadow-drop-bottom-right w-full sm:w-full md:w-3/4 lg:w-10/12 xl:w-full ">
                        <div className="flex flex-col justify-start -mt-5 items-center">
                            <Image src="/Logo.svg" width={200} height={200} alt="Logo" onClick={handleHome} />
                            <h1 className="w-full font-bold mb-4 text-center border-2 border-slate-950 rounded-lg p-4">Welcome</h1>
                        </div>
                        <Form className="flex flex-col justify-center items-center">
                            <CustomInput label="Email:" name="email" inputType="email" icon={faEnvelope} placeholder="Enter your email" />
                            <div className="flex justify-center w-full ">
                                <button type="submit" className="bg-blue-700 hover:bg-blue-500 rounded-md p-2 w-full flex items-center justify-center text-white">
                                    <span className="mr-2">Reset</span>
                                </button>
                                {showLoading && <Loading />}
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>
    );
}
