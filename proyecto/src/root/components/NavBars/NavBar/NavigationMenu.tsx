import DropdownButton from "./DropDown";
import MenuItem from "./MenuItem";

interface MenuItem {
    link: string;
    className: string;
    icon?: any;
    text: string;
}

const NavigationMenu = ({ menuItems, isUser, isAnimated, animatedItemId, handleClick }: { menuItems: MenuItem[]; isUser: boolean; isAnimated: boolean; animatedItemId: string; handleClick: (itemId: string) => void }) => {
    return (
        <div id="navbar-default" className="w-auto md:flex md:w-auto hidden flex-col z-50">
            <div className="flex items-center w-full justify-center">
                <ul className="w-full font-medium flex flex-col items-center justify-center md:p-0 border rounded-3xl md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-700">
                    {menuItems.map((menuItem, index) => (
                        <MenuItem key={index} menuItem={menuItem} index={index} isAnimated={isAnimated} animatedItemId={animatedItemId} handleClick={handleClick} />
                    ))}
                    {isUser ? <DropdownButton /> : null}
                </ul>
            </div>
        </div>
    );
};

export default NavigationMenu;
