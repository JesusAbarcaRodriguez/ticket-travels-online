import { CustomSelect } from "@/root/components/Formik";
import { Route, Schedule } from "@/root/types";

interface CustomSelectBuyFormProps {
    initialValues: {
        route: string;
        date: string;
        time: string;
    };
    handleRouteSelectChange: any;
    routeSelect: Route;
    routeFoundList: Route[];
}

const CustomsSelectBuyForm: React.FC<CustomSelectBuyFormProps> = ({ initialValues, handleRouteSelectChange, routeSelect, routeFoundList }) => {
    return (
        <div>
            <CustomSelect label="Route:" name="route" placeholder="Select a route" onChange={handleRouteSelectChange} value={`${routeSelect.startPlace}-${routeSelect.destinationPlace}`}>
                {!initialValues.route ? <option value="">Select a route</option> : ""}
                {routeFoundList.map((route, index) => (
                    <option key={index} value={`${route.startPlace}-${route.destinationPlace}`}>
                        {`${route.startPlace}-${route.destinationPlace}`}{" "}
                    </option>
                ))}
            </CustomSelect>
            <CustomSelect label="Time:" name="time" placeholder="select an time">
                {!initialValues.time ? <option value="">Select a hour</option> : null}
                {routeSelect.schedules?.length ? (
                    routeSelect.schedules.map((schedule: Schedule, index: number) => (
                        <option key={index} value={schedule.departureTime}>
                            {schedule.departureTime}
                        </option>
                    ))
                ) : (
                    <option value="">No schedules available</option>
                )}
            </CustomSelect>
        </div>
    );
};
export default CustomsSelectBuyForm;