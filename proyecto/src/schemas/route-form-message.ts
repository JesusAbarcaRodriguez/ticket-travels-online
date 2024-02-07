import * as Yup from "yup";
const routeMessage = Yup.object({
    startPlace: Yup.string().required("Required field"),
    destinationPlace: Yup.string().required("Required field"),
    duration: Yup.string().required("Required field"),
    price: Yup.string().required("Required field"),
    routeType: Yup.string().required("Required field"),
});
export default routeMessage;
