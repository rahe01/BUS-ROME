import TicketCard from "../Components/TicketCard/TicketCard";

const BigBus = () => {
    return (
        <div className=" container mx-auto">
            {/* Full-width responsive image */}
            <div className="hidden md:block" >
                <img
                    src="./Bigbus/bigbus.png"
                    alt="Big Bus Rome"
                    className="w-full object-contain"
                />
            </div>

            <div className="block md:hidden" >
                <img
                    src="./Bigbus/bigbus1.png"
                    alt="Big Bus Rome"
                    className="w-full object-contain"
                />
            </div>

            {/* Text content */}
            <div className="py-16 ">
                <h1 className="text-3xl font-bold">Big Bus Service</h1>
                <p className="text-gray-600">
                    Travel in style with our big bus services
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
</div>

        </div>
    );
};

export default BigBus;
