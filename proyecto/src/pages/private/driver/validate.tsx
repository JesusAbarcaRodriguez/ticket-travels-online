import { LayoutDriver } from "@/Layout";
import { QRScanner } from "@/root/components";

export default function Validate() {
    return (
        <LayoutDriver>
            <div className="sticky left-1/4 w-1/2 -z-0">
                <QRScanner />
            </div>
        </LayoutDriver>
    );
}
