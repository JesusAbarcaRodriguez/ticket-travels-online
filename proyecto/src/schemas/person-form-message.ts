import * as Yup from "yup";
const personMessage = Yup.object().shape({
    name: Yup.string().required("The name is required").min(3, "The name must have at least 5 characters"),
    surname: Yup.string().required("Last names are required").min(3, "Last name must have at least 5 characters"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
});
export default personMessage;
