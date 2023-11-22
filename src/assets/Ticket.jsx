import Button from "./Button.jsx";
import QrCode from "../assets/images/Qr-code.png";
import {useEffect} from "react";

export default function Ticket( {ticketData} ) {
    useEffect(() => {

    }, [ticketData]);

    return(
        <div className="flex flex-row flex-wrap justify-start p-3 sm:p-6 bg-white rounded-2xl">
            <div className="w-36 flex gap-6 justify-center items-center">
                <img src={QrCode} alt="Qr-code" className="h-fit"/>
            </div>
            <div className="flex flex-col py-6 sm:p-6 gap-3 sm:gap-6">
                <div className="text-2xl font-semibold">{ticketData.title}</div>{/*Amapiano tour Sep 2023*/}
                <div className="flex justify-start flex-wrap flex-row gap-x-8">
                    <div className="gap-0.5">
                        <div className="text-sm font-normal">Date</div>
                        <div className="text-base font-medium">{ticketData.startDate}</div>{/*Aug 16 2023*/}
                    </div>
                    <div className="gap-0.5">
                        <div className="text-sm font-normal">Location</div>
                        <div className="text-base font-medium">{ticketData.venue}</div>{/*Naivasha, Kenya*/}
                    </div>
                    <div className="gap-0.5">
                        <div className="text-sm font-normal">Quantity</div>
                        <div className="text-base font-medium">1 Ticket</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center justify-items-center items-center p-4 gap-2.5">
                <button className={'btn btn-primary text-white'}>UnEnroll</button>
            </div>
        </div>
    );
}