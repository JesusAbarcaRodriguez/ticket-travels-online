import { Template } from "@pdfme/generator";
import basePdf from "./basePdf.json";
export const template: Template = {
    basePdf: basePdf.basePdf,
    schemas: [
        {
            dateauto: {
                type: "text",
                position: {
                    x: 30.69,
                    y: 59,
                },
                width: 35,
                height: 7,
            },
            route: {
                type: "text",
                position: {
                    x: 3,
                    y: 74,
                },
                width: 100,
                height: 7,
            },
            date: {
                type: "text",
                position: {
                    x: 3,
                    y: 86,
                },
                width: 100,
                height: 7,
            },
            time: {
                type: "text",
                position: {
                    x: 3,
                    y: 99,
                },
                width: 100,
                height: 7,
            },
            client: {
                type: "text",
                position: {
                    x: 3,
                    y: 111.5,
                },
                width: 100,
                height: 7,
            },
            email: {
                type: "text",
                position: {
                    x: 3,
                    y: 124,
                },
                width: 100,
                height: 7,
            },
            countseats: {
                type: "text",
                position: {
                    x: 3,
                    y: 136.7,
                },
                width: 100,
                height: 7,
            },
            price: {
                type: "text",
                position: {
                    x: 3,
                    y: 150,
                },
                width: 100,
                height: 7,
            },
            seat: {
                type: "text",
                position: {
                    x: 3,
                    y: 162.5,
                },
                width: 100,
                height: 7,
            },
            total: {
                type: "text",
                position: {
                    x: 3,
                    y: 175,
                },
                width: 100,
                height: 7,
            },
            bus: {
                type: "text",
                position: {
                    x: 3,
                    y: 187.5,
                },
                width: 100,
                height: 7,
            },
            qr: {
                type: "qrcode",
                position: {
                    x: 11,
                    y: 195.56,
                },
                width: 80,
                height: 80,
            },
        },
    ],
};
