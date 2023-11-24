import {useEffect} from "react";
import Ticket from "./Ticket.jsx";
import {Link} from "react-router-dom";
import Event from "./Event.jsx";

export default function MyEventGroup({organizerEvents}) {

    useEffect(() => {
    }, [organizerEvents]);
    return (
        <>
            <div className="flex justify-center w-full mb-6">
                <div className="border border-none w-full bg-gray-100 rounded-2xl p-4 sm:p-6">
                    <div className="flex items-center gap-2.5 mb-6">
                        <div className="text-2xl font-bold">My Organized Events</div>
                        <div className="bg-gray-300 rounded-full flex justify-center h-7 w-7 items-center">
                            <div className="text-base font-semibold">{organizerEvents.length}</div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1  gap-4">
                        {
                            organizerEvents.length > 0 ? (
                                // organizerEvents?.map((ticket, index) => (
                                //     <>
                                //         {/*<Organi key={index} ticketData={ticket}/>*/}
                                //     </>
                                // ))
                                <div
                                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                                    {organizerEvents?.map(
                                        event =>
                                            <div className={'bg-white rounded-2xl'}>
                                                <Link className={'block'} key={event.eventId} to={`/event_details/${event.eventId}`}>
                                                    <Event event={event}/>
                                                </Link>

                                                <div className={'flex p-2'}>
                                                    <Link to={`/event_attendees/${event.eventId}`} className={'btn border-2 border-gray-900 flex-grow'}>View
                                                        Attendees
                                                    </Link>
                                                    {/*<button className={'btn btn-primary text-white'}>View Atendees</button>*/}
                                                </div>
                                            </div>
                                    )}
                                </div>
                            ) : (

                                (!organizerEvents.length) ? (
                                    <div className={'bg-orange-100 rounded-2xl p-10'}>
                                        <p>Your Event will be shown here</p>
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