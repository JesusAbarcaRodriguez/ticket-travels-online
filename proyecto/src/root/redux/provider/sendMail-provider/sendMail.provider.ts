import axios from "axios";

const sendMail = async (email: string, subject: string, body: string, pdfUrl?: string) => {
    const response = await axios.post("/api/mails", {
        email: email,
        subject: subject,
        body: body,
        pdfUrl: pdfUrl,
    });
    return response.data;
};

const mailProvider = {
    sendMail,
};

export default mailProvider;
