import { useState } from "react";
import policies from "./Policies.json";

interface PolicyProps {
    onClose: () => void;
}
export default function SellingPolicy({ onClose }: PolicyProps) {
    const [showPolicy, setShowPolicy] = useState(true);
    function handleClose() {
        setShowPolicy(false);
        onClose();
    }
    return (
        <div className="w-">
            {showPolicy && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="bg-white p-4 sm:p-8 md:p-12 rounded-md relative border-2 border-black text-center w-2/3 sm:w-3/5 md:w-1/2">
                        <button className="absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-xl md:text-2xl font-semibold mb-4">Selling Policy</h2>
                        <p className="text-base md:text-lg">By buying a ticket on our platform, you accept our sales policies:</p>
                        <ul className="list-disc ml-8 md:ml-12">
                            {Object.values(policies).map((policy, index) => (
                                <li className="text-base md:text-lg font-serif" key={index}>
                                    {policy}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
