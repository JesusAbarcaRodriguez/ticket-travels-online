import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { faDoorOpen, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { selectLoadingState, selectLogin, startLogin } from "@/root/redux";
import { CustomInput } from "@/root/components";
import { loginMessage } from "@/schemas";
import Link from "next/link";
import { useLogin } from "@/root/hooks";
import { toast } from "react-hot-toast";
import { Loading } from "../LoadingScreen";
import { useRouter } from "next/router";

interface FormValues {
    email: string;
    password: string;
}
export default function LoginPage() {
    const router = useRouter();
    const isLoading = useSelector(selectLoadingState);
    const dispatch = useDispatch();
    const initialValues: FormValues = {
        email: "",
        password: "",
    };
    const user = useSelector(selectLogin);

    const handleSubmit = async (values: FormValues) => {
        const { email, password } = values;
        const isLogin = await dispatch(startLogin(email, password));
        if (isLogin === undefined) {
            toast.error("Incorrect Credentials");
        }
    };
    useLogin();
    const handleHome = () => {
        router.push("/");
    };
    return (
        <Formik initialValues={initialValues} validationSchema={loginMessage} onSubmit={handleSubmit}>
            {isLoading ? (
                <Loading />
            ) : (
                <div className=" flex justify-center items-center sm:w-1/2 md:w-2/4 lg:w-3/4 xl:w-full">
                    <div className="w-full max-w-md flex justify-center items-center">
                        <div className="bg-slate-200 rounded-lg shadow-inner pltrb-11 flex flex-col justify-center items-center shadow-drop-bottom-right w-full sm:w-full md:w-3/4 lg:w-10/12 xl:w-full ">
                            <div className="flex flex-col justify-start -mt-5 items-center">
                                <Image src="/Logo.svg" width={200} height={200} alt="Logo" onClick={handleHome} />
                                <h1 className="w-full font-bold mb-4 text-center border-2 border-slate-950 rounded-lg p-4">Welcome</h1>
                            </div>
                            <Form className="flex flex-col justify-center items-center w-full">
                                <CustomInput label="Email:" name="email" inputType="email" icon={faEnvelope} />
                                <CustomInput label="Password:" inputType="password" name="password" icon={faLock} />
                                <div className="flex justify-center w-full">
                                    <button type="submit" className="bg-blue-700 hover:bg-blue-500 rounded-md p-2 w-full flex items-center justify-center text-white">
                                        <span className="mr-2">Log In</span>
                                        <FontAwesomeIcon icon={faDoorOpen} />
                                    </button>
                                </div>
                            </Form>
                            <Link href="/private/reset" className="flex flex-col text-center mt-2 hover:text-blue-600 hover:underline">
                                Forgot my password, <span className="text-blue-400">click here</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    );
}
