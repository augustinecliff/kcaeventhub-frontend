import {useEffect, useState} from "react";
import axiosApiInstance from "../../utils/AxiosApiInstance.js";
import MyEventGroup from "../../assets/MyEventGroup.jsx";
import {loggedInUser} from "../../utils/AuthService.js";


export default function MyEvents() {
    const [organizerEvents, setOrganizerEvents] = useState([]);

    // useEffect(() => {
    //     axiosApiInstance.get(`/api/event/host/viewparticipants/${organizerEvents}`,).then(
    //         res => {
    //             console.log();
    //             setOrganizerEvents(res.data.data);
    //         }
    //     )
    // }, []);

    useEffect(() => {
        getMyOrganizedEvents().then();
    }, []);

    const getMyOrganizedEvents = async () => {
        const user = await loggedInUser();
        // TODO: REMOVE THE "user.userId" BELOW
        user.userId = '2ee45a0f-dd65-4921-8820-02b7b2806a4d';
        await axiosApiInstance.get(`/api/event/by/${user.userId}`,).then(
            res => {
                setOrganizerEvents(res.data.data);
            }
        )
    }

    return (
        <>
            <div className="w-full flex justify-center mb-6">
                <div className="border border-none w-full rounded-2xl pt-2.5">
                    {
                        organizerEvents && (
                            <MyEventGroup organizerEvents={organizerEvents}/>
                        )
                    }
                </div>
            </div>
        </>
    );
}