import Ticket from "./Ticket.jsx";

export default function TicketGroup() {
    const tickets = [];
    for (let i = 0;i < 3;i ++) {
        tickets.push(i);
    }

    return(
        <>
            <div className="flex justify-center w-full mb-6">
                <div className="border border-none w-full bg-gray-100 rounded-2xl py-6">
                    <div className="flex items-center gap-2.5 px-6">
                        <div className="text-2xl font-bold">My active tickets</div>
                        <div className="bg-gray-300 rounded-full flex justify-center h-7 w-7 items-center">
                            <div className="text-base font-semibold">2</div>
                        </div>
                    </div>
                    <div className="p-6 w-full grid grid-cols-1  gap-4">
                        {tickets.map((ticket) => <Ticket key={ticket}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}
