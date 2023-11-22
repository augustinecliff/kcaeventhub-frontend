import EventGroup from "../../assets/Event-Group.jsx";
import {useEffect, useState} from "react";
import {baseUrl} from "../../App.jsx";
import axiosApiInstance from "../../utils/AxiosApiInstance.js";
import axios from "axios";

export default function Home() {
    const [events, setEvents] = useState([]);
    const url = baseUrl + '/api/event/browse';

    useEffect(() => {
        const browseEvents = async () => {
            const params = {
                size: 1000,
                page: 0,
            };

            try {
                const response = await axios.get(url,{params: params});
                if (response.status === 200) {
                    console.log(response.data.data.events.sort());
                    setEvents(response.data.data.events);
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        browseEvents().finally();
    }, [url]);
    return (
        <>
            <Header/>
            <EventGroup events={events}/>
        </>
    );
}

function Header() {
    const [eventCategories, setEventCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const url = baseUrl + '/api/event/categories';

    useEffect(() => {
        const fetchEventCategories = async () => {
            try {
                const response = await axiosApiInstance.get(url);
                if (response.status === 200) {
                    setEventCategories(response.data.data);
                } else {
                    console.error('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchEventCategories().finally();

    }, []);

    return (
        <div className="border relative flex flex-col overflow-hidden border-none rounded-2xl h-[600px]  md:h-96 mb-8">
            <img src={'src/assets/images/home.jpg'} className={'object-cover absolute w-full h-full '}/>
            <div
                className={'absolute w-full min-h-full flex flex-col justify-center gap-4 p-8 text-white bg-black/30 text-center'}>
                <div className="flex justify-center text-2xl md:text-5xl font-bold">Search for events</div>
                <div className="flex justify-center text-2xl">Explore top-rated attractions, activities and more!</div>
                <div className="flex justify-center flex-wrap lg:flex-nowrap text-base gap-1 text-gray-800">
                    <div className="w-full">
                        <input type="search" placeholder="What are you looking for ?"
                               className="input input-bordered w-full"/>
                    </div>
                    <select className="select select-bordered w-full lg:w-fit"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {eventCategories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}</option>
                        ))}
                        <option value={""}>All categories</option>
                    </select>

                    <button className="btn btn-primary text-white w-full lg:w-fit">Search</button>

                </div>
                <div className="flex justify-center text-base">or browse event by feature</div>
                <div className="flex flex-wrap justify-center text-base gap-4">

                    <button type="button"
                            className="flex py-2 px-4 bg-gray-400/70 backdrop-blur-md rounded-full">Upcoming
                        events
                    </button>

                    <button className="flex py-2 px-4 bg-gray-400/70 backdrop-blur-md rounded-full">Featured events
                    </button>

                    <button className="flex py-2 px-4 bg-gray-400/70 backdrop-blur-md rounded-full">All events</button>

                </div>
            </div>
        </div>
    );
}
