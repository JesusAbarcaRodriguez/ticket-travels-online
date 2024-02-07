import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface MenuItemProps {
    link: string;
    className: string;
    icon?: any;
    text: string;
}
const MenuItem = ({ menuItem, index, isAnimated, animatedItemId, handleClick }: { menuItem: MenuItemProps; index: number; isAnimated: boolean; animatedItemId: string; handleClick: (itemId: string) => void }) => {
    return (
        <li key={index} id={`menu-item-${index}`} className={isAnimated && animatedItemId === `menu-item-${index}` ? "scale-up-center" : ""} onClick={() => handleClick(`menu-item-${index}`)}>
            <Link href={menuItem.link} className={`flex items-baseline ${menuItem.className}`}>
                {menuItem.icon && (
                    <>
                        <FontAwesomeIcon icon={menuItem.icon} color={`white ${menuItem.className}`} width={15} />
                        <span className="px-1 mr-5 hover:underline">{menuItem.text}</span>
                    </>
                )}
            </Link>
        </li>
    );
};

export default MenuItem;
