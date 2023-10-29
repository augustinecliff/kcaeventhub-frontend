import Event from "./Event.jsx";

export default function EventGroup() {
    const events = [];
    for (let i = 0;i < 8;i ++) {
        events.push(i);
    }

    console.log(events);

    return (
        <>
            {/*<div className="event-group-outer border bg-red-400 w-full">*/}
            {/*    <div className="event-group-outer-heading">*/}
            {/*        <div style={*/}
            {/*            {*/}
            {/*                color: "black",*/}
            {/*                fontSize: "24px",*/}
            {/*                fontFamily: "Inter, serif",*/}
            {/*                fontWeight: "600",*/}
            {/*                wordWrap: "break-word"*/}
            {/*            }*/}
            {/*        }>Popular events</div>*/}
            {/*        <div style={*/}
            {/*            {*/}
            {/*                color: "white",*/}
            {/*                fontSize: "16px",*/}
            {/*                fontFamily: "Inter, serif",*/}
            {/*                fontWeight: "400",*/}
            {/*                wordWrap: "break-word"*/}
            {/*            }*/}
            {/*        }><a href="" className="link">See more...</a></div>*/}
            {/*    </div>*/}
            {/*    /!*<div className="event-group-inner">*!/*/}
            {/*    /!*    {events.map((events) => <Event key={events}/>)}*!/*/}
            {/*    /!*</div>*!/*/}

            {/*    <div className="">*/}
            {/*        {events.map((events) => <Event key={events}/>)}*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="flex justify-center w-screen">
                <div className="border w-full md:w-8/12">
                    <div className="flex justify-between ">
                        <div className="text-2xl font-bold mb-4">Popular events</div>
                        <div><a href="" className="link">See more...</a></div>
                    </div>
                    {/*<div className="event-group-inner">*/}
                    {/*    {events.map((events) => <Event key={events}/>)}*/}
                    {/*</div>*/}

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {events.map((events) => <Event key={events}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}