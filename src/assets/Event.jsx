import "./Event.css";
import {useEffect} from "react";

export default function Event( {event} ) {

    useEffect(() => {

        },[event]);
    return (
            <div className="event hover w-full max-w-full h-full rounded-2xl overflow-hidden p-2 bg-white" >
                <div className="event-photo bg-cover bg-no-repeat bg-center transition-all rounded-xl flex justify-center items-center">
                    <p className={'text-center text-white text-2xl uppercase p-10 mix-blend-exclusion'}>{event.title}</p>
                </div>
                <p className="py-2 capitalize min-h-[50px] line-clamp-2">{event.title}</p> {/*Amapiano tour Sep 2023*/}
                <div className="flex gap-2 text-sm font-medium p-0.2 w-full">
                    <div className="bg-[url('/src/assets/images/kcauLogo.jpeg')] bg-no-repeat bg-contain w-10 h-10 border border-black rounded-full"></div>
                    <p className="capitalize">{event.venue} <br/>
                        <span className="text-xs text-gray-500 w-full">{event.startDate}</span>
                    </p>

                </div>
            </div>

    );
}
