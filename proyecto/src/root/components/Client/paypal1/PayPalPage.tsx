import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { Ticket } from "@/root/types";
import { useDispatch, useSelector } from "react-redux";
import { departureProvider, payCreate, selectSalesPolicies, selectTicket } from "@/root/redux";
import { ReportComponent } from "../../Report";

interface Order {
    id: string;
    status: string;
}
interface MyOrderResponseBody {
    id: string;
    status: string;
    links: any;
}

export default function PayPalPage() {
    const isSalesPolicie = useSelector(selectSalesPolicies);
    const [showReport, setShowReport] = useState(false);
    const ticket: Ticket = useSelector(selectTicket);
    const [details, setDetails] = useState<MyOrderResponseBody | null>(null);
    const dispatch = useDispatch();
    const handleOrderCapture = async (order: Order) => {
        dispatch(await payCreate(order.id));
        if (order.status === "COMPLETED") {
            const details: MyOrderResponseBody = {
                id: order.id,
                status: order.status,
                links: {},
            };
            setDetails(details);
            setShowReport(true);
            departureProvider.soldSeats(ticket.departure.id, ticket.seats);
        }
    };
    return (
        <>
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
                <div className="w-50% flex flex-col MR justify-center items-center border-4 border-gray p-6 rounded-lg m-4">
                    {!isSalesPolicie ? (
                        <PayPalButtons
                            className="w-full z-0"
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: ticket.totalToPay,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order!.capture().then(handleOrderCapture);
                            }}
                        />
                    ) : (
                        <div className="flex flex-col items-center">
                            <p className="text-center p-2">Accept the sales policies to continue with</p>
                            <div className="w-52 flex flex-row items-center justify-center p-4 bg-white border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                                <p>Step 4</p>
                            </div>
                        </div>
                    )}
                    {showReport && <ReportComponent qrValue={details!.id} />}
                </div>
            </div>
        </>
    );
}
