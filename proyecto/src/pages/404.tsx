import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage: React.FC = () => {
    return (
        <div className=" fixed top-0 right-0 bottom-0 left-0 justify-center background">
            <div className="mars"></div>
            <Image src="/404.svg" className="logo-404" alt="" width={100} height={100} />
            <p className="title">Oh no!!</p>
            <p className="subtitle">You are either misspelling the URL or requesting a page that{"'"}s no longer here.</p>
            <div className="flex justify-center">
                <Link className=" text-black button" href="/">
                    Back to Home
                </Link>
            </div>
            <Image src="/ticket.png" className="astronaut" alt="" width={100} height={100} />
            <Image src="/Bus.svg" className="bus" alt="" width={100} height={100} />
            <Image src="/Bus.svg" className="bus" alt="" width={100} height={100} />
            <Image src="/Bus.svg" className="bus" alt="" width={100} height={100} />
        </div>
    );
};

export default NotFoundPage;
