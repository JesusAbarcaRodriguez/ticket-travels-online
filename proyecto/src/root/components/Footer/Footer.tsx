import { useEffect, useState } from "react";
import { Component } from ".";

export default function Footer() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1165);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <footer className="sm:bg-white md:bg-gray-700 lg:bg-gray-900 pb-1 h-40">
            {isSmallScreen ? (
                <>
                    <Component logo="/Logo.svg" className="text-black" />
                </>
            ) : (
                <>
                    <Component logo="/LogoBlanco.svg" className="text-white" />
                </>
            )}
        </footer>
    );
}
