import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";

interface uploadPDFProps {
    ticket: string;
    base64: string;
}
interface uploadImageProps {
    file: File;
}

export const uploadPDF = async ({ ticket, base64 }: uploadPDFProps) => {
    const storage = getStorage();
    const pdfRef = ref(storage, `pdfs/ticket-${ticket}`);
    await uploadString(pdfRef, base64, "data_url");
    const pdfUrl = await getDownloadURL(pdfRef);
    return pdfUrl;
};

export const uploadImage = async (route: string, file: string) => {
    const storage = getStorage();
    const imageRef = ref(storage, route);
    await uploadString(imageRef, file, "data_url");
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
};
