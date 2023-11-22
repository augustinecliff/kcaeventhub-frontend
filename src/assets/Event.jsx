import "./Event.css";
import {useEffect} from "react";

export default function Event( {event} ) {

    useEffect(() => {

        },[event]);
    return (
            <div className="event hover w-full max-w-full rounded-2xl overflow-hidden p-2 bg-white" >
                <div className="event-photo bg-cover bg-center transition-all rounded-xl">
                </div>
                <p className="py-2 capitalize">{event.title}</p> {/*Amapiano tour Sep 2023*/}
                <div className="flex flex-row justify-center items-center gap-2 text-sm font-medium p-0.2">
                    <div className="w-10 h-10 border border-black rounded-full"></div>
                    <p className="flex-grow">{event.venue}</p>{/*Amapiano Nairobi*/}
                    <p className="">{event.startDate}</p>{/*Aug 16 2023*/}
                </div>
            </div>

    );
}
