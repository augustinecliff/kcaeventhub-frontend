import QrCode from "../assets/images/Qr-code.png";
import {useEffect} from "react";
import axiosApiInstance from "../utils/AxiosApiInstance.js";
import {Link, useParams} from "react-router-dom";

export default function Ticket({ticketData}) {

    // let {eventId} = useParams();

    useEffect(() => {

    }, [ticketData]);

    const unEnroll = () => {
        axiosApiInstance.patch(`/api/event/user/un-enroll?eventId=${ticketData.eventId}`)
            .then(res => {
                document.getElementById('success_modal').showModal();
            })
            .catch(
                e => {
                    alert(e.response.data.message);
                }
            )
            .finally()
    }

    return (
        <>
            {
                ticketData && (
                    <div className="flex flex-row flex-wrap justify-start p-3 sm:p-6 bg-white rounded-2xl">

                        <div className="w-36 h-36 flex gap-6 justify-center items-center">
                            <img src={'/src/assets/images/icon.png'} alt="Qr-code"
                                 className="w-full h-full border border-orange-100 rounded-2xl opacity-70"/>
                        </div>
                        <div className="flex flex-col py-6 sm:p-6 gap-3 sm:gap-6 flex-grow">
                            <Link to={`/event_details/${ticketData.eventId}`}>
                                <div
                                    className="text-2xl font-semibold capitalize cursor-pointer hover:text-orange-600">{ticketData.title}</div>
                            </Link>

                            <div className={'flex flex-row flex-wrap justify-between gap-4 flex-grow'}>
                                <div className="flex justify-start flex-wrap flex-row gap-x-8 gap-y-4">

                                    <div className="gap-0.5">
                                        <div className="text-sm font-normal">Quantity</div>
                                        <div className="text-base font-medium">1 Ticket</div>
                                    </div>
                                    <div className="gap-0.5">
                                        <div className="text-sm font-normal">Date</div>
                                        <div className="text-base font-medium">{ticketData.startDate}</div>
                                    </div>
                                    <div className="gap-0.5">
                                        <div className="text-sm font-normal">Location</div>
                                        <div className="text-base font-medium">{ticketData.venue}</div>
                                    </div>

                                </div>
                                <button onClick={() => unEnroll()} className={'btn border-2 border-orange-500'}>Un-enroll</button>
                            </div>


                        </div>
                    </div>
                )
            }
        </>

    );
}
