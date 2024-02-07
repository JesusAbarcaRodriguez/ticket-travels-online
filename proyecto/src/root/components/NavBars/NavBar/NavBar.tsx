import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import NavigationMenu from "./NavigationMenu";
import { useMediaQuery } from "react-responsive";

interface MenuItem {
    text: string;
    link: string;
    icon?: IconProp;
    className: string;
}

interface NavBarProps {
    menuItems?: MenuItem[];
    isUser: boolean;
}

export default function NavBar(props: NavBarProps) {
    const { menuItems, isUser } = props;
    const [isAnimated, setIsAnimated] = useState(false);
    const [animatedItemId, setAnimatedItemId] = useState<string | null>(null);
    const handleClick = (itemId: string) => {
        if (isAnimated && animatedItemId === itemId) {
            return;
        }
        setIsAnimated(false);
        setTimeout(() => {
            setIsAnimated(true);
            setAnimatedItemId(itemId);
            setTimeout(() => {
                setIsAnimated(false);
                setAnimatedItemId(null);
            }, 1000);
        }, 50);
    };
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const toggleMenu = () => {
        const navbarDefault = document.getElementById("navbar-default");
        if (navbarDefault) {
            navbarDefault.classList.toggle("hidden");
        }
    };
    return (
        <nav className="flex-col justify-center right-0 border-gray-200 bg-gray-700 z-50 h-auto">
            <div className="w-full">
                <div className="max-w-screen-2xl flex flex-col items-center justify-center mx-auto p-4 h-1/6 sm:justify-center sm:items-center">
                    <div className="flex sm:flex-row justify-between items-center w-full p-2">
                        <div className="flex flex-row sm:justify-between justify-between">
                            <figure className="flex items-center mb-5 mx-5">
                                <Image src="/LogoBlanco.svg" alt="Logo" className="h-10 w-auto" width={400} height={400} />
                                <Link href="/" className="ml-2 self-center text-2xl font-semibold whitespace-nowrap text-white">
                                    JAFA BusTickets
                                </Link>
                            </figure>
                        </div>
                        <div>
                            <button type="button" className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                        {!isMobile && menuItems && <NavigationMenu menuItems={menuItems} isUser={isUser} isAnimated={isAnimated} handleClick={handleClick} animatedItemId={""} />}
                    </div>
                    {isMobile && menuItems && <NavigationMenu menuItems={menuItems} isUser={isUser} isAnimated={isAnimated} handleClick={handleClick} animatedItemId={""} />}
                </div>
            </div>
        </nav>
    );
}
