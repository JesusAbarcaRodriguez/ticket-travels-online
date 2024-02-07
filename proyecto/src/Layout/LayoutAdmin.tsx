import { AdminBar, Footer, Loading } from "@/root/components";
import { selectLoadingState, selectMessage } from "@/root/redux/selectors";
import { ReactNode } from "react";
import {  useSelector } from "react-redux";
import { useMessage } from "@/root/hooks";
type LayoutProps = {
    children: ReactNode;
};
const LayoutAdmin = ({ children }: LayoutProps) => {
    const loading = useSelector(selectLoadingState);
    useMessage();
    return (
        <div className="h-screen">
            <AdminBar />
            {loading ? <Loading /> : <main className=" bg-gradient-to-br from-slate-300 to-white flex flex-col items-center justify-center">{children}</main>}
            <Footer />
        </div>
    );
};
export default LayoutAdmin;
