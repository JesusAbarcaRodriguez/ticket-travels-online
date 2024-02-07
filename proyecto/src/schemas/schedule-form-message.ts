import * as Yup from "yup";
const scheduleMessage = Yup.object({
    departureTime: Yup.string().required("Required field"),
    driverId: Yup.string().required("Required field"),
    busNumber: Yup.string().required("Time is mandatory"),
});
export default scheduleMessage;
