import {useEffect, useState} from "react";
import axiosApiInstance from "../../utils/AxiosApiInstance.js";

export function CreateEvent() {
    const [loading, setLoading] = useState(false)
    const [eventCategories, setEventCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [success, setSuccess] = useState('')
    const [formData, setFormData] = useState({
        title: '',
        startDate: '',
        endDate: '',
        duration: '',
        pricing: 0,
        venue: '',
        capacity: '',
        ageRestriction: '',
        description: '',
        category: selectedCategory,
    });

    const clearFromData = () => {
        setFormData(
            {
                title: '',
                startDate: '',
                endDate: '',
                duration: '',
                pricing: 0,
                venue: '',
                capacity: '',
                ageRestriction: '',
                description: '',
                category: selectedCategory,
            }
        )
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleChange = (event) => {
        const targetName = event.target.name;
        setFormData({...formData, [targetName]: event.target.value})
    }

    const fetchCategories = () => {
        axiosApiInstance.get('/api/event/categories')
            .then(res => {
                setEventCategories(res.data.data);
            })
            .catch()
            .finally()
    };

    const createEvent = () => {
        console.log(formData)
        setLoading(true);
        setSuccess('')
        axiosApiInstance.post('/api/event/create', {...formData, category: selectedCategory})
            .then(
                res => {
                    console.log(res)
                    clearFromData();
                }
            )
            .catch(e => {
                console.log(e)
            }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <>
            <section className={'flex justify-center p-8 px-2'}>

                <div className={'w-full md:w-[600px]'}>
                    <h3 className={'text-2xl font-semibold mb-4'}>Create an event</h3>
                    <p>Enter your event details below</p>

                    <div className={'my-4'}>
                        <label className="label">
                            <span className="label-text font-semibold">Event Category</span>
                        </label>
                        <select className="select select-bordered w-full"
                                onChange={(e) => {
                                    setSelectedCategory(eventCategories[e.target.value]);
                                }}
                        >
                            {eventCategories.map((category, index) => (
                                <option key={index} value={index}>{category.name}</option>
                            ))}
                            <option value={""}>All categories</option>
                        </select>

                        <label className="label">
                            <span className="label-text font-semibold">Event title</span>
                        </label>
                        <input name='title' type="text" placeholder=""
                               className="input input-bordered w-full" required
                               value={formData.title} onChange={handleChange}/>

                        <label className="label">
                            <span className="label-text font-semibold">Event Description</span>
                        </label>
                        <textarea name='description' rows={4}
                                  className="textarea textarea-bordered w-full" required
                                  value={formData.description} onChange={handleChange}></textarea>

                        <label className="label">
                            <span className="label-text font-semibold">Event Start Date</span>
                        </label>
                        <input name='startDate' type="date" placeholder=""
                               className="input input-bordered w-full" required
                               value={formData.startDate} onChange={handleChange}/>

                        <label className="label">
                            <span className="label-text font-semibold">Event End Date</span>
                        </label>
                        <input name='endDate' type="date" placeholder=""
                               className="input input-bordered w-full" required
                               value={formData.endDate} onChange={handleChange}/>

                        <label className="label">
                            <span className="label-text font-semibold">Event Duration</span>
                        </label>
                        <input name='duration' type="number" placeholder="hrs."
                               className="input input-bordered w-full" required
                               value={formData.duration} onChange={handleChange}/>

                        <label className="label">
                            <span className="label-text font-semibold">Event Pricing</span>
                        </label>
                        <input name='pricing' type="number" placeholder=""
                               className="input input-bordered w-full" required
                               value={formData.pricing} onChange={handleChange}/>

                        <label className="label">
                            <span className="label-text font-semibold">Event Venue</span>
                        </label>
                        <input name='venue' type="text" placeholder=""
                               className="input input-bordered w-full" required
                               value={formData.venue} onChange={handleChange}/>

                        <label className="label">
                            <span className="label-text font-semibold">Event Capacity</span>
                        </label>
                        <input name='capacity' type="number" placeholder=""
                               className="input input-bordered w-full" required
                               value={formData.capacity} onChange={handleChange}/>

                        <label className="label">
                            <span className="label-text font-semibold">Event Age Restriction</span>
                        </label>
                        <input name='ageRestriction' type="number" placeholder=""
                               className="input input-bordered w-full" required
                               value={formData.ageRestriction} onChange={handleChange}/>

                        <button className="btn btn-primary mt-4 w-full text-white" disabled={loading}
                                onClick={() => createEvent()}>
                                        <span
                                            className={loading ? "loading loading-spinner text-primary" : 'hidden'}></span>
                            <span className={loading ? "hidden" : 'visible'}>Create Event</span>
                        </button>

                    </div>
                    <button className="btn w-full mt-2">Cancel
                    </button>
                </div>


            </section>
        </>
    )
}
