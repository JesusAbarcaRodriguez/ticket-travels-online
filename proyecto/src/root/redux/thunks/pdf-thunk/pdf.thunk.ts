import { fileProvider } from "@/root/redux";
import { Dispatch } from "react";

export const pdfUpload = (client: string, file: Blob): any => {
    return async (dispatch: Dispatch<any>): Promise<string> => {
        const imageUrl = await fileProvider.uploadPDF(client, file);
        return imageUrl;
    };
};
