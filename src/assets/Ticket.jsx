import Button from "./Button.jsx";
import QrCode from "../assets/images/Qr-code.png";

export default function Ticket() {

    return(
        <div className="flex flex-row flex-wrap justify-start p-3 sm:p-6 bg-white rounded-2xl">
            <div className="w-36 flex gap-6 justify-center items-center">
                <img src={QrCode} alt="Qr-code" className="h-fit"/>
            </div>
            <div className="flex flex-col py-6 sm:p-6 gap-3 sm:gap-6">
                <div className="text-2xl font-semibold">Amapiano tour Sep 2023</div>
                <div className="flex justify-start flex-wrap flex-row gap-x-8">
                    <div className="gap-0.5">
                        <div className="text-sm font-normal">Date</div>
                        <div className="text-base font-medium">Aug 16 2023</div>
                    </div>
                    <div className="gap-0.5">
                        <div className="text-sm font-normal">Location</div>
                        <div className="text-base font-medium">Naivasha, Kenya</div>
                    </div>
                    <div className="gap-0.5">
                        <div className="text-sm font-normal">Quantity</div>
                        <div className="text-base font-medium">1 Ticket</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center p-4 gap-2.5">
                <Button name="Download"/>
                <Button name="Share"/>
            </div>
        </div>
    );
}