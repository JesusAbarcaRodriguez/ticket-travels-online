import { LayoutClient } from "@/Layout";
import { SalesPoliciesCheck } from "../sales-policies-check";
import { TicketPage } from "../ticketPage";
import { PayPalPage } from "../paypal1";

export default function PayPage() {
    return (
        <LayoutClient>
            <div className="bg-gradient-to-br from-slate-300 to-white e md:flex flex flex-col w-full min-h-screen mt-top items-center sm:p-8">
                <div className="w-52 flex flex-row items-center justify-center p-4 bg-white border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                    <p>Step 3 of 4</p>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-center items-center">
                    <div className="flex flex-col md:flex-row w-full md:w-2/3 lg:w-1/2 xl:w-2/3 justify-center items-center md:justify-between">
                        <TicketPage />
                        <div className="border-2 m-4 rounded-lg border-slate-300 shadow-lg shadow-slate-300 flex flex-col w-full md:w-1/2 items-center md:items-center mt-4 md:mt-0">
                            <SalesPoliciesCheck />
                            <PayPalPage />
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full w-11/12"></div>
                </div>
            </div>
        </LayoutClient>
    );
}
