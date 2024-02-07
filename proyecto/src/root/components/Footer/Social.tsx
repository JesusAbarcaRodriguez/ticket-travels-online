import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Social() {
    return (
        <div className="flex flex-col items-center justify-center space-x-4 mb-4">
            <div className="flex flex-row">
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 text-gray-500 mr-3">
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 text-gray-500 mr-3">
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                </Link>
            </div>
            <span className="flex text-sm justify-center text-gray-400">© 2023 BusTicket UNA. All rights reserved.</span>
        </div>
    );
}
