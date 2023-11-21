import EventGroup from "../../assets/Event-Group.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../../App.jsx";

export default function Home() {

    return (
        <>
            <Header />
            <EventGroup/>
            <EventGroup/>
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
                const response = await axios.get(url);
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

    },[]);

    return(
        <div className="bg-gray-100 flex flex-col border border-none rounded-2xl gap-2.5 p-2.5 mb-6  py-5 md:py-20 text-center">
            <div className="flex justify-center text-2xl font-bold">Search for events</div>
            <div className="flex justify-center text-base">Explore top-rated attractions, activities and more!</div>
            <div className="flex justify-center flex-wrap text-base gap-1">
                <div className="w-full sm:w-1/2">
                    <input type="search" placeholder="What are you looking for ?" className="flex py-4 px-6 border rounded-xl bg-white w-full" />
                </div>
                <select className="bg-gray-300 flex py-2 my-2 sm:py-4 px-0 sm:px-6 border"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {eventCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}</option>
                    ))}
                    <option value={""}>All categories</option>
                </select>
                <div>
                    <button className="flex py-4 px-6 border bg-gray-300 rounded-md">Search</button>
                </div>
            </div>
            <div className="flex justify-center text-base">or browse event by feature</div>
            <div className="flex flex-wrap justify-center text-base gap-4">
                <div>
                    <button type="button" className="flex py-2 px-4 border bg-gray-300 rounded-3xl">Upcoming events</button>
                </div>
                <div>
                    <button className="flex py-2 px-4 border bg-gray-300 rounded-3xl">Featured events</button>
                </div>
                <div>
                    <button className="flex py-2 px-4 border bg-gray-300 rounded-3xl">All events</button>
                </div>
            </div>
        </div>
    );
}