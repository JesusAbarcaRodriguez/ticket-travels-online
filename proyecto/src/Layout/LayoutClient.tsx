import { ClientBar, Footer, Loading } from "@/root/components";
import { useMessage } from "@/root/hooks";
import { resetMessages } from "@/root/redux";
import { selectLoadingState, selectMessage } from "@/root/redux/selectors";
import { ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

type LayoutProps = {
    children: ReactNode;
};
interface MessageType {
    [key: string]: () => void;
}
const LayoutClient = ({ children }: LayoutProps) => {
    const loading = useSelector(selectLoadingState);
    useMessage();
    return (
        <>
            <ClientBar />
            {loading ? <Loading /> : <main className="flex justify-center items-center bg-slate-200 bg-gradient-to-r from-blue-300 to-slate-200">{children}</main>}
            <Footer />
        </>
    );
};
export default LayoutClient;
