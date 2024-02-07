import { setSalesPolicies } from "@/root/redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function SalesPoliciesCheck() {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = async () => {
        await setIsChecked(!isChecked);
        dispatch(setSalesPolicies(isChecked));
        toast.success("Step 3 completed!");
    };
    return (
        <div className="w-3/4 mx-auto">
            <p className="font-bold mt-5 text-center mb-10">
                Before proceeding with the payment, you must accept the
                <label htmlFor="selling-policies" className="ml-2 inline-flex items-center">
                    <input type="checkbox" id="selling-policies" checked={isChecked} onChange={handleChange} className="form-checkbox text-indigo-600 h-4 w-4" />
                    <span className="ml-2 text-indigo-600 font-bold text-lg">Selling Policies</span>
                </label>
            </p>
        </div>
    );
}
