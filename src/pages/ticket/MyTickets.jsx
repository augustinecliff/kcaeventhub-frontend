import TicketGroup from "../../assets/Ticket-Group.jsx";

export default function MyTickets() {

    return(
        <>
            <div className="w-full flex justify-center mb-6">
                <div className="border border-none w-full rounded-2xl pt-2.5">
                    <TicketGroup />
                    <TicketGroup />
                </div>
            </div>
        </>
    );
}