import * as Yup from "yup";
const contactMessage = Yup.object({
    name: Yup.string().required("The name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    body: Yup.string().required("Email is required"),
});
export default contactMessage;
