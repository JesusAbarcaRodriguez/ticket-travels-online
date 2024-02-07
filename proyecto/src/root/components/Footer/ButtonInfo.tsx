interface ButtonInfoProps {
    onClick: () => void;
    name: string;
    className: string;
}
export default function ButtonInfo({ onClick, name, className }: ButtonInfoProps) {
    const color = className === "text-black" ? "nav-item-black" : "nav-item";
    const color2 = className === "text-black" ? "nav-item-black-underline" : "nav-item-underline";
    return (
        <li className={`${color} w-10 mr-3`}>
            <button onClick={onClick} className={`mr-4 hover:underline ${color} md:mr-6`}>
                {name}
            </button>
            <span className={`${color2}`}></span>
        </li>
    );
}