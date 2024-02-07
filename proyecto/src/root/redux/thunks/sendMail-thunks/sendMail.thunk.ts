import { AnyAction } from "redux";
import { mailProvider } from "../../provider";

export const sendEmail = (recipient: string, subject: string, content: string, pdfUrl?: string): any => {
    return async (dispatch: AnyAction) => {
        await mailProvider.sendMail(recipient, subject, content, pdfUrl);
    };
};
