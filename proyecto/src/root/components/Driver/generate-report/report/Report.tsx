import { Departure } from "@/root/types";
import { useState } from "react";
import { DepartureList } from "./departureList";
import Image from "next/image";

interface ReportProps {
    onClose: () => void;
    departure: Departure;
    seatAvailability: any;
}
export default function Report({ onClose, departure, seatAvailability }: ReportProps) {
    const [showReport, setShowReport] = useState(true);
    function handleClose() {
        setShowReport(false);
        onClose();
    }
    const handlePrint = () => {
        window.print();
    };
    return (
        <>
            {showReport && (
                <div className=" flex flex-col fixed inset-0 z-50 justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="flex flex-col bg-slate-200 p-10 border border-black border-dotted w-full h-full items-center fixed left-0 top-0 right-0 bottom-auto">
                        <Image src="/Logo.svg" alt="" width={300} height={300}></Image>
                        <span className="text-center text-3xl mb-5">Departure report</span>
                        <div className="flex items-center justify-center">
                            <ul>
                                <DepartureList departure={departure} seatAvailability={seatAvailability} />
                            </ul>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                            <button className="print:hidden mt-5 border border-black text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleClose}>
                                Exit
                            </button>
                            <button className="print:hidden mt-5 border border-black text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handlePrint}>
                                Print
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
