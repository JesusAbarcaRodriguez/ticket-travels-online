import { LayoutDriver } from "@/Layout";
import { GenerateReportMain } from "@/root/components";

export default function Validate() {
    return (
        <LayoutDriver>
            <div className="w-screen h-screen">
                <GenerateReportMain />
            </div>
        </LayoutDriver>
    );
}
