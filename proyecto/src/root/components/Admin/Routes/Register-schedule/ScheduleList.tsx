import { useSelector } from "react-redux";
import Hour from "./Hour";
import { selectSchedules } from "@/root/redux";
function ScheduleList() {
    const schedulesFoundList = useSelector(selectSchedules);
    return (
        <div className="w-full md:w-1/2 overflow-y-scroll">
            <div className=" md:h-full max-h-96 m-2">
                {schedulesFoundList.map((schedule, index) => (
                    <Hour key={index} schedule={schedule} />
                ))}
            </div>
        </div>
    );
}
export default ScheduleList;
