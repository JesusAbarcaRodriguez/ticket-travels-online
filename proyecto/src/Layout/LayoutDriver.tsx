import { DriverBar, Footer, Loading } from "@/root/components";
import { useMessage } from "@/root/hooks";
import { selectLoadingState, selectMessage } from "@/root/redux/selectors";
import { ReactNode } from "react";
import {  useSelector } from "react-redux";
type LayoutProps = {
    children: ReactNode;
};
const LayoutDriver = ({ children }: LayoutProps) => {
    const loading = useSelector(selectLoadingState);
    useMessage();
    return (
        <>
            <DriverBar />
            {loading ? <Loading /> : <main className="flex flex-col items-center ">{children}</main>}
            <Footer />
        </>
    );
};
export default LayoutDriver;
