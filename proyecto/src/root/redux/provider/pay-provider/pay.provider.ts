import axios from "axios";

const deletePay = async (pay: string) => {
    const response = await axios.delete(`/api/payment/delete/${pay}`);
    return response;
};

const createPay = async (idPayment: string) => {
    const response = await axios.post("/api/payment", {
        idPayment: idPayment,
    });
};

export const payProvider = {
    deletePay,
    createPay,
};
