import Event from "./Event.jsx";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export default function EventGroup({events}) {

    useEffect(() => {
        console.log(events);
    }, [events]);
    return (
        <>
            <div className="flex justify-center w-full mb-6">
                <div className="border border-none w-full bg-gray-100 rounded-2xl p-4 sm:p-6">
                    <div className="flex justify-between mb-4">
                        <div className="text-2xl font-bold mb-4">Upcoming Events</div>
                        {/*<div><a href="" className="link">See more...</a></div>*/}
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                        {events?.map(
                            event => <Link key={event.eventId} to={`/event_details/${event.eventId}`}>
                                <Event event={event}/>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
