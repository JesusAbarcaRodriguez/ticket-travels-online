import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Route } from "@/root/types";
import { motion } from "framer-motion";
interface SliderComponentProps {
    destinations: Route[];
}
export default function SliderComponent({ destinations }: SliderComponentProps) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Slider dots={true} infinite={true} speed={1000} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={2000} arrows={true} className="mb-11">
                {destinations
                    .filter((destination) => destination.routeType === "Popular")
                    .map((destination, index) => (
                        <div key={index}>
                            <div className="text-center">
                                <span>{destination.destinationPlace}</span>
                            </div>
                            <div>
                                <Image src={destination.image} width={1000} height={1000} alt={""} className="mx-auto cursor-pointer w-full h-auto" />
                            </div>
                        </div>
                    ))}
            </Slider>
        </motion.div>
    );
}
