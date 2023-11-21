import EventGroup from "../../assets/Event-Group.jsx";
import {useEffect, useState} from "react";
import {baseUrl} from "../../App.jsx";
import axios from "axios";

function EventSearch() {
    const [events, setEvents] = useState([]);
    const url = baseUrl + '/api/event/browse';

    useEffect(() => {
        const browseEvents = async () => {
            const params = {
                size: 8,
                page: 0,
            };

            try {
                const response = await axios.get(url,{params: params});
                if (response.status === 200) {
                    console.log(response.data.data.events.sort());
                    setEvents(response.data.data.events.sort((a,b) => a.title - b.title));
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        browseEvents().finally();
    }, [url]);
    return(
        <>
            <Header />
            <EventGroup events={events}/>
        </>
    );
}

export default EventSearch;

function Header() {
    return(
        <div className="bg-gray-100 flex flex-col border border-none rounded-2xl gap-2.5 p-2.5 mb-6  py-4 md:py-6 text-center">
            <div className="flex justify-center text-2xl font-bold">Search for events</div>
            <div className="flex justify-center flex-wrap text-base gap-1">
                <div className="w-full sm:w-1/2">
                    <input type="search" placeholder="What are you looking for ?" className="flex py-4 px-6 border rounded-xl bg-white w-full" />
                </div>
                <select className="bg-gray-300" defaultValue={"all"}>
                    <option className="flex py-4 px-6 border bg-gray-300" value={"all"} >All categories</option>
                </select>
                <div>
                    <button className="flex py-4 px-6 border bg-gray-300 rounded-md">Search</button>
                </div>
                <div>
                    <button className="flex py-4 px-6 border bg-gray-300 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.49993 10.2225V18.125C7.49993 18.2315 7.52719 18.3363 7.57912 18.4294C7.63104 18.5225 7.7059 18.6008 7.79659 18.6567C7.88728 18.7127 7.99078 18.7446 8.09725 18.7493C8.20373 18.754 8.30964 18.7315 8.40493 18.6837L12.1549 16.8087C12.2586 16.7568 12.3458 16.677 12.4067 16.5783C12.4677 16.4796 12.4999 16.3659 12.4999 16.25V10.2225L17.9837 3.52121C18.0357 3.45768 18.0747 3.38453 18.0985 3.30592C18.1223 3.22732 18.1303 3.1448 18.1222 3.06308C18.1141 2.98137 18.0899 2.90205 18.0511 2.82967C18.0124 2.75728 17.9597 2.69324 17.8962 2.64121C17.8327 2.58917 17.7595 2.55016 17.6809 2.52639C17.6023 2.50263 17.5198 2.49458 17.4381 2.5027C17.3563 2.51083 17.277 2.53497 17.2046 2.57375C17.1323 2.61252 17.0682 2.66518 17.0162 2.72871L11.3912 9.60371C11.2997 9.7155 11.2498 9.85552 11.2499 9.99996V15.8637L8.74993 17.1137V9.99996C8.75005 9.85552 8.70014 9.7155 8.60868 9.60371L3.81868 3.74996H13.7499C13.9157 3.74996 14.0747 3.68411 14.1919 3.5669C14.3091 3.44969 14.3749 3.29072 14.3749 3.12496C14.3749 2.9592 14.3091 2.80022 14.1919 2.68301C14.0747 2.5658 13.9157 2.49996 13.7499 2.49996H2.49993C2.38153 2.49988 2.26554 2.53343 2.16547 2.59671C2.0654 2.65999 1.98536 2.7504 1.93468 2.8574C1.88399 2.96441 1.86474 3.0836 1.87917 3.20112C1.8936 3.31864 1.94111 3.42964 2.01618 3.52121L7.49993 10.2225Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}