import { FaRegClock } from "react-icons/fa6";
import { LuTicket } from "react-icons/lu";

const TicketCard = () => {
    return (
        <div className="w-full mb-2   md:mb-14  md:w-72  mx-auto bg-white rounded-xl shadow-md overflow-hidden border ">
            {/* Image Section */}
            <img
                src="./Bigbus/bigbus.png"
                alt="Big Bus Rome"
                className="w-full h-[120px] md:h-[168px] object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
                {/* Tour Type and Duration */}
                <div className="flex justify-between items-center text-xs md:text-sm mb-2 whitespace-nowrap">
                    <span className="flex items-center gap-1">
                        Hop-On Hop-Off Tour
                        <span className="mx-1 block md:hidden">|</span>
                    </span>
                    <span className="flex items-center gap-1">
                        <FaRegClock /> 24 hours
                    </span>
                </div>


                {/* Title */}
                <h2 className="md:text-md font-bold text-gray-800">
                    Hop-On Hop-Off Panoramic Rome Bus Tour
                </h2>

                {/* Tickets and Price */}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center text-xs md:text-sm text-gray-500">
                        <LuTicket className="mr-1" />
                        <span>#2</span>
                    </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center mt-2 gap-1 whitespace-nowrap">
                    <h3 className="font-normal text-sm md:text-md">Start From</h3>
                    <span className="text-lg font-bold text-gray-800">€ 28</span>
                    <span className="text-xs md:text-sm text-gray-500">(Per person)</span>
                </div>

                {/* Button */}
                <button className="w-full py-2 px-5 mt-3 text-white bg-2 md:rounded-lg rounded-3xl font-medium">
                    Buy Tickets
                </button>
            </div>
        </div>
    );
};

export default TicketCard;

