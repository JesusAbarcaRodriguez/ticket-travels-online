import * as Yup from "yup";
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 3);
const buyMessage = Yup.object().shape({
    date: Yup.string()
        .nullable()
        .required("Enter a date")
        .test("date-validation", "Select a valid date", function (value) {
            if (value === null || value === undefined || value === "") {
                return false;
            }
            const selectedDate = new Date(value);
            selectedDate.setDate(selectedDate.getDate() + 1);
            selectedDate.setHours(0, 0, 0, 0);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            return selectedDate >= currentDate && selectedDate <= maxDate;
        }),
    time: Yup.string().required("Time is mandatory"),
});
export default buyMessage;
