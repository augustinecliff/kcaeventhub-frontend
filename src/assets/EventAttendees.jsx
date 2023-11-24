import {useEffect} from "react";
import Ticket from "./Ticket.jsx";
import {Link} from "react-router-dom";
import Event from "./Event.jsx";

export default function EventAttendees({attendees}) {

    useEffect(() => {
    }, [attendees]);
    return (
        <>
            <div className="flex justify-center w-full mb-6">
                <div className="border border-none w-full bg-gray-100 rounded-2xl pt-6">
                    <div className="flex items-center gap-2.5 px-6">
                        <div className="text-2xl font-bold">Attendees</div>
                        <div className="bg-gray-300 rounded-full flex justify-center h-7 w-7 items-center">
                            <div className="text-base font-semibold">{attendees.length}</div>
                        </div>
                    </div>
                    <div className="p-6 w-full">

                        {attendees.length > 0 && (
                            <div className="overflow-x-auto bg-white rounded-2xl">

                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {attendees?.map(
                                        (attendee, index) => (
                                            <tr key={attendee.id}>
                                                <th>{index + 1}</th>
                                                <td>{attendee.user.firstName + ' ' + attendee.user.lastName}</td>
                                                <td>{attendee.user.email}</td>
                                                <td>{attendee.user.phoneNumber}</td>
                                                <td>{attendee.role}</td>
                                            </tr>
                                        )
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {
                            (!attendees.length) && (
                                <div className={'skeleton rounded-2xl p-10 text-center'}>
                                    <p className={'text-lg'}>This event Does not have attendees yet</p>
                                    <p className={'text-lg'}>Your Attendees will be shown here</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}