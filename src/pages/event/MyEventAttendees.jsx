import {useEffect, useState} from "react";
import axiosApiInstance from "../../utils/AxiosApiInstance.js";
import MyEventGroup from "../../assets/MyEventGroup.jsx";
import {loggedInUser} from "../../utils/AuthService.js";
import {useParams} from "react-router-dom";
import EventAttendees from "../../assets/EventAttendees.jsx";


export default function MyEventAttendees({route}) {
    const [attendees, setAttendees] = useState([]);
    let {eventId} = useParams();

    // useEffect(() => {
    //     axiosApiInstance.get(`/api/event/host/viewparticipants/${organizerEvents}`,).then(
    //         res => {
    //             console.log();
    //             setOrganizerEvents(res.data.data);
    //         }
    //     )
    // }, []);

    useEffect(() => {
        getAttendees().then();
    }, []);

    const getAttendees = async () => {
        await axiosApiInstance.get(`/api/event/host/viewparticipants/${eventId}`,).then(
            res => {
                setAttendees(res.data.data);
            }
        )
    }

    return (
        <>
            <div className="w-full flex justify-center mb-6">
                <div className="border border-none w-full rounded-2xl pt-2.5">
                    {
                        attendees && (
                            <EventAttendees attendees={attendees}/>
                        )
                    }
                </div>
            </div>
        </>
    );
}