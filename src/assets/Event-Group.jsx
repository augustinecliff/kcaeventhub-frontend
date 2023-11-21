import Event from "./Event.jsx";
import {useEffect} from "react";

export default function EventGroup( {events} ) {

    useEffect(() => {
        console.log(events);
    },[events]);
    return (
        <>
            <div className="flex justify-center w-full mb-6">
                <div className="border border-none w-full bg-gray-100 rounded-2xl py-6">
                    <div className="flex justify-between px-6">
                        <div className="text-2xl font-bold mb-4">Popular events</div>
                        <div><a href="" className="link">See more...</a></div>
                    </div>
                    <div className="p-6 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {/*{events.map(
                            event => <Event key={event.eventId}  event={event}/>
                        )}*/}
                    </div>
                </div>
            </div>
        </>
    );
}