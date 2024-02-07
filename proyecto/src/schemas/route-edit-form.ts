import * as Yup from "yup";
const routeEditMessage = Yup.object({
    duration: Yup.string()
        .required("Required field")
        .matches(/^[0-9]+ hours$/, 'Invalid duration format. Must start with a number followed by the word "hours".'),
    price: Yup.string().required("Required field"),
});
export default routeEditMessage;
