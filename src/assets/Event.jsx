import "./Event.css";
export default function Event() {
    return (
            <div className="event hover w-full max-w-full rounded-2xl" >
                <div className="event-photo">
                </div>
                <p className="py-4">Amapiano tour Sep 2023</p>
                {/*<div className="event-organiser">*/}
                {/*    <div className="event-organiser-profile-photo"></div>*/}
                {/*    <p className="event-organiser-font">Amapiano Nairobi</p>*/}
                {/*    <p className="event-date-font">Aug 16 2023</p>*/}
                {/*</div>*/}
                <div className="flex flex-row justify-center items-center gap-2 text-sm font-medium">
                    <div className="w-10 h-10 border border-black rounded-full"></div>
                    <p className="flex-grow">Amapiano Nairobi</p>
                    <p className="">Aug 16 2023</p>
                </div>
            </div>

    );
}