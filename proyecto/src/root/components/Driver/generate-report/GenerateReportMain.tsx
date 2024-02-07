import { useDispatch, useSelector } from "react-redux";
import ReportList from "./ReportList";
import { selectLogin } from "@/root";
import { getDepartureReport, selectReportDepartureSelect } from "@/root/redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
export default function GenerateReportMain() {
    const [date, setDate] = useState("");
    const dispatch = useDispatch();
    const departuresReport = useSelector(selectReportDepartureSelect);
    const driver = useSelector(selectLogin);
    const handleGenerateReport = () => {
        try {
            dispatch(getDepartureReport(driver.uid, date));
            toast.success("Departures loaded successfully");
        } catch (error) {
            toast.error("No exists departures in this date");
        }
    };
    return (
        <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="h-screen bg-slate-200 items-center w-full flex flex-col ">
            <div className=" flex flex-col justify-center items-center w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">REPORT</h1>
                <p className="text-center text-gray-700 mb-8 text-sm sm:text-base md:text-lg px-4">Inform yourself about the status of departures by searching for a date and generating a report based on the desired departure time.</p>
                <div className="flex flex-col  border-2  w-2/4 m-4 border-slate-300 shadow-lg shadow-slate-300 rounded-lg">
                    <form className="flex flex-col justify-center items-center" onSubmit={handleGenerateReport}>
                        <div className="m-4 shadow-lg shadow-slate-300 rounded-lg p-2 ">
                            <label>Select date:</label>
                            <input className="m-4 p-2 rounded-lg text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700" value={date} onChange={(e) => setDate(e.target.value)} type="date" />
                        </div>
                        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }} className="flex items-center">
                            <button type="submit" className="w-36 m-4 p-2 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                                Generate
                            </button>
                        </motion.div>
                    </form>
                </div>
            </div>
            {departuresReport.length > 1 ? <ReportList departures={departuresReport} /> : <div className="w-3/4 h-3/4 m-4 border-2  rounded-lg border-slate-300 shadow-lg shadow-slate-300 font-bold flex justify-center items-center text-center text-green-600 mt-4 animate-pulse animate-faster p-4 text-4xl">Departure list here!</div>}
        </motion.main>
    );
}
