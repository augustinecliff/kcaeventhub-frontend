import EventGroup from "../../assets/Event-Group.jsx";

export default function EventHostPage() {

    return(
        <>
            <Header />
            <EventGroup />
            <EventGroup />
        </>
    );
}

function Header() {

    return(
        <>
            <div className="h-36 sm:h-60 bg-green-200 flex flex-col justify-end w-full mb-6 rounded-2xl px-6 sm:px-6">
                <div className="h-1/2 bg-gray-100 flex w-full mb-6 rounded-2xl p-2 sm:p-4 gap-6">
                    <div className="h-14 w-14 sm:h-20 sm:w-20 bg-white rounded-full">
                    </div>
                    <div className="flex flex-col sm:gap-1 justify-center">
                        <div className="flex font-bold">Amapiano Nairobi</div>
                        <div className="flex flex-col sm:flex-row flex-wrap sm:gap-6">
                            <div className="">amapiano@gmail.com</div>
                            <div>254700000000</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}