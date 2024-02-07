import * as Yup from "yup";
const reportDriverMessage = Yup.object({
    date: Yup.string().required("The name is required"),
});
export default reportDriverMessage;
