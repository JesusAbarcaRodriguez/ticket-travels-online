import React, { useState } from "react";
import Link from "next/link";
import menuItems from "./menuItems";
import Image from "next/image";
interface AboutProps {
    onClose: () => void;
}

function About({ onClose }: AboutProps) {
    const [showAbout, setShowAbout] = useState(true);

    function handleClose() {
        setShowAbout(false);
        onClose();
    }
    return (
        <>
            {showAbout && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="bg-white p-8 rounded-md relative border-2 border-black text-center">
                        <button className="absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold mb-4">About us</h2>
                        <p className="mb-2">This is the team of four developers that created this app.</p>
                        <ul className="bg-gray-500 grid grid-cols-2 gap-4 font-medium justify-center items-center p-5 md:p-5 mt-4 border rounded-lg md:flex-col md:mt-0 md:border-0">
                            {menuItems.map((menuItem, index) => (
                                <li key={index} className="nav-item items-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <Link href={menuItem.link} target="_blank" className="hover:underline cursor-pointer scale-up-center">
                                            <Image src={menuItem.image} alt={menuItem.text} width={100} height={100} />
                                            {menuItem.text}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default About;
