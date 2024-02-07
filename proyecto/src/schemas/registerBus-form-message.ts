import * as Yup from "yup";

const busMessage = Yup.object().shape({
    plateNumber: Yup.string().required("License plate number is required"),
    busNumber: Yup.string().required("The number of seats is required"),
});

export default busMessage;
