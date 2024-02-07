import { payDelete } from "@/root/redux";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function QRScanner() {
    const [scanned, setScanned] = useState(false);
    const dispatch = useDispatch();

    const handleDecode = async (result: string) => {
        if (!scanned) {
            await dispatch(payDelete(result));
        }
    };

    const handleError = (error: { message: any }) => {};

    return (
        <div className="flex flex-col">
            <QrScanner onDecode={handleDecode} onError={handleError} />
        </div>
    );
}
