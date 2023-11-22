import Ticket from "./Ticket.jsx";
import {useEffect} from "react";

export default function TicketGroup({tickets}) {

    useEffect(() => {
    }, [tickets]);
    return (
        <>
            <div className="flex justify-center w-full mb-6">
                <div className="border border-none w-full bg-gray-100 rounded-2xl py-6">
                    <div className="flex items-center gap-2.5 px-6">
                        <div className="text-2xl font-bold">My active tickets</div>
                        <div className="bg-gray-300 rounded-full flex justify-center h-7 w-7 items-center">
                            <div className="text-base font-semibold">{tickets.length}</div>
                        </div>
                    </div>
                    <div className="p-6 w-full grid grid-cols-1  gap-4">
                        {
                            tickets.length > 0 ? (
                                tickets?.map((ticket, index) => (
                                    <Ticket key={index} ticketData={ticket}/>
                                ))
                            ) : (

                                (!tickets.length) ? (
                                    <div className={'bg-orange-100 rounded-2xl p-10'}>
                                        <p>Your Event tickets will be shown here</p>
                                    </div>
                                ) : (
                                    <div className="skeleton w-full h-32"></div>
                                )

                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
