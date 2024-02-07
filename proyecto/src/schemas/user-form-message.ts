import * as Yup from "yup";
const userMessage = Yup.object({
    user: Yup.string().required("Required field"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    contact: Yup.string()
        .required("Required field")
        .test("password", "Password must have at least 6 characters and one capital letter    ", (value) => {
            if (value) {
                return /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(value);
            }
            return true;
        }),
});
export default userMessage;
