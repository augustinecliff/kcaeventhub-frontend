import TicketGroup from "../../assets/Ticket-Group.jsx";
import {useEffect, useState} from "react";
import axiosApiInstance from "../../utils/AxiosApiInstance.js";

export default function MyTickets() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axiosApiInstance.get("/api/event/upcoming-events",).then(
            res => {
                console.log();
                setTickets(res.data.data);
            }
        )
    }, []);

    return(
        <>
            <div className="w-full flex justify-center mb-6">
                <div className="border border-none w-full rounded-2xl pt-2.5">
                    <TicketGroup tickets={tickets}/>
                </div>
            </div>
        </>
    );
}