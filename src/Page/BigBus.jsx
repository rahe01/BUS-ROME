import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketCard from "../Components/TicketCard/TicketCard";
import Similar from "./Similar";

const BigBus = () => {
    const [tickets, setTickets] = useState([]);

    // Fetch data using Axios
    useEffect(() => {
        axios
            .get("/bigBus.json")
            .then((response) => {
                setTickets(response.data);
            })
            .catch((error) => {
                console.error("Error fetching bigBus data:", error);
            });
    }, []);

    return (
        <div className="container mx-auto">
            {/* Full-width responsive image */}
            <div className="hidden md:block">
                <img
                    src="./Bigbus/bigbus.png"
                    alt="Big Bus Rome"
                    className="w-full object-contain"
                />
            </div>

            <div className="block md:hidden">
                <img
                    src="./Bigbus/bigbus1.png"
                    alt="Big Bus Rome"
                    className="w-full object-contain"
                />
            </div>

            <div className="px-4 md:px-8">
                <div className="py-10 md:py-14">
                    <h1 className="text-3xl font-bold">Big Bus Service</h1>
                    <p className="text-gray-600">
                        Travel in style with our big bus services
                    </p>
                </div>

                {/* Render tickets dynamically */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tickets.map((ticket, index) => (
                        <TicketCard
                            key={index}
                            title={ticket.title}
                            subtitle={ticket.subtitle}
                            image={ticket.image}
                            duration={ticket.duration}
                            ticketCount={ticket.ticket_count}
                            price={ticket.price}
                        />
                    ))}
                </div>
            </div>

            <Similar />
        </div>
    );
};

export default BigBus;
