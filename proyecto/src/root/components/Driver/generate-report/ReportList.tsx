import { Departure } from "@/root/types";
import ReportDriver from "./ReportDriver";

interface ReportProps {
    departures: Departure[];
}
export default function ReportList({ departures }: ReportProps) {
    return (
        <div className="w-3/4 rounded-lg bg-gray-300  overflow-y-auto max-h-full max-w-full ">
            <ul className="rounded-lg md:mt-0 md:border-0">
                {departures.map((departure, index) => (
                    <li key={index}>
                        <ReportDriver item={departure}></ReportDriver>
                    </li>
                ))}
            </ul>
        </div>
    );
}
