import axios from "axios";

const uploadImage = async (route: string, file: File): Promise<string> => {
    const base64 = file.type.indexOf("image") > -1 ? await parseToBase64(file) : "";

    const response = await axios.post("/api/file", {
        file: base64,
        route: route,
        name: file.name,
    });
    return response.data as string;
};

const uploadPDF = async (ticket: string, file: Blob): Promise<string> => {
    const base64 = file.type.indexOf("pdf") > -1 ? await parseToBase64(file) : "";
    const response = await axios.post("/api/file/pdf", {
        base64: base64,
        ticket: ticket,
    });
    return response.data as string;
};

export const fileProvider = {
    uploadImage,
    uploadPDF,
};

const parseToBase64 = (file: File | Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64 = reader.result as string;
            resolve(base64);
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
};
