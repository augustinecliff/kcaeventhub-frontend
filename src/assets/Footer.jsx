import Button from "./Button.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export function Footer() {
    const location = useLocation();
    const [showFooter ,setShowFooter]= useState(true);

    useEffect(() => {
        console.log(`The current route is ${location.pathname}`);
        setShowFooter((!(location.pathname.includes("create_event") || location.pathname.includes("my_tickets"))));

    },[location]);

    return(
        <>
            {showFooter &&
                <div className="bg-gray-100 flex flex-col border border-none rounded-2xl gap-2.5 pt-2.5 mb-6  py-5 md:py-20 text-center">
                    <div className="flex justify-center text-2xl font-bold">Ready to elevate your event experience?</div>
                    <div className="flex justify-center text-base">Streamline ticketing, boost sales, and get dedicated support</div>
                    <div className="flex justify-center flex-wrap text-base gap-1">
                        <button className={'btn btn-primary text-white px-10'}
                                onClick={() => document.getElementById('login_modal').showModal()}>Join Now
                        </button>
                    </div>
                    <div className="flex justify-center text-base">or browse event by feature</div>
                </div>
            }
        </>
    );
}
