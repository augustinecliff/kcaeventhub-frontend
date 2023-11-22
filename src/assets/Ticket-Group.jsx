import Ticket from "./Ticket.jsx";
import {useEffect, useState} from "react";
import axiosApiInstance from "../utils/AxiosApiInstance.js";

export default function TicketGroup( {tickets} ) {
    useEffect(() => {

    },[tickets,axiosApiInstance]);

    return(
        <>
            <div className="flex justify-center w-full mb-6">
                <div className="border border-none w-full bg-gray-100 rounded-2xl py-6">
                    <div className="flex items-center gap-2.5 px-6">
                        <div className="text-2xl font-bold"></div>{/*My active tickets*/}
                        <div className="bg-gray-300 rounded-full flex justify-center h-7 w-7 items-center">
                            <div className="text-base font-semibold">{tickets.length}</div>{/*2*/}
                        </div>
                    </div>
                    <div className="p-6 w-full grid grid-cols-1  gap-4">
                        {tickets.map((ticket) => <Ticket key={ticket.eventId} ticketData={ticket}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}
