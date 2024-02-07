import { useEffect, useState } from "react";
import { Ticket } from "@/root/types";
import { useDispatch, useSelector } from "react-redux";
import { pdfUpload, selectTicket, sendEmail } from "@/root/redux";
import { template } from "./const/templateTicket";
import { inputsTicket } from "./const/inputsTicket";
import { generate } from "@pdfme/generator";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

interface Props {
    qrValue: string;
}

export default function ReportComponent(props: Props) {
    const { qrValue } = props;
    const router = useRouter();
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const ticket: Ticket = useSelector(selectTicket);
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(5);
    useEffect(() => {
        toast.success("Step 4 completed!");
        const inputsProps = { day, month, year, ticket, qrValue };
        generate({ template, inputs: inputsTicket(inputsProps) }).then(async (pdf) => {
            const blob = new Blob([pdf.buffer], { type: "application/pdf" });
            const pdfUrl = await dispatch(pdfUpload(ticket.client.name, blob));
            dispatch(await sendEmail(ticket.client.email, "Ticket", "Gracias por comprar", pdfUrl));
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `ticket ${ticket.client.name}.pdf`;
            link.click();
            const timer = setTimeout(() => {
                router.push("/home");
            }, 5000);
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
            return () => {
                clearTimeout(timer);
                clearInterval(interval);
            };
        });
    }, [day, dispatch, month, qrValue, router, ticket, year]);
    return (
        <div className="fixed inset-0 flex flex-col w-full justify-center items-center bg-blue-300 bg-opacity-95">
            <p className="flex font-serif font-semibold text-center text-6xl">¡Ticket generated and downloaded successfully!</p>
            <span>You will be redirected to the home page in {counter} seconds.</span>
        </div>
    );
}
