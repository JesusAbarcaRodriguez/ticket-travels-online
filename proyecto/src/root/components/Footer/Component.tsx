import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonInfo, Social } from ".";
import { About, ContactPage, SellingPolicy } from "../CompanyInfo";

interface ButtonInfo {
    logo: string;
    className: string;
}

export default function Component({ logo, className }: ButtonInfo) {
    const [showAbout, setShowAbout] = useState(false);
    const handleCloseAbout = () => {
        setShowAbout(false);
    };
    const [showContact, setShowContact] = useState(false);
    const handleCloseContact = () => {
        setShowContact(false);
    };
    const [showPolicy, setShowPolicy] = useState(false);
    const handleClosePolicy = () => {
        setShowPolicy(false);
    };
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="p-1 flex flex-wrap items-center justify-between">
                <Link href="/home" className="flex items-center">
                    <Image src={logo} alt="Logo" className="h-8 w-auto" width={300} height={300} />
                    <span className={`ml-2 self-center text-lg font-semibold whitespace-nowrap ${className}`}>JAFA BusTickets</span>
                </Link>
                <ul className={`flex flex-wrap sm:mt-1 items-center text-sm font-medium ${className}`}>
                    <ButtonInfo onClick={() => setShowAbout(true)} name="About" className={`${className}`} />
                    <ButtonInfo onClick={() => setShowPolicy(true)} name="Policy" className={`${className}`} />
                    <ButtonInfo onClick={() => setShowContact(true)} name="Contact" className={`${className}`} />
                </ul>
            </div>
            <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <Social />
            {showAbout && <About onClose={handleCloseAbout} />}
            {showContact && <ContactPage onClose={handleCloseContact} />}
            {showPolicy && <SellingPolicy onClose={handleClosePolicy} />}
        </div>
    );
}
