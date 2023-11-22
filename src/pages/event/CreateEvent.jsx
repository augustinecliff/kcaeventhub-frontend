import {useState} from "react";

export function CreateEvent() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        startDate: '',
        endDate: '',
        duration: '',
        pricing: '',
        venue: '',
        capacity: '',
        ageRestriction: '',
        description: '',
        category: '',
    });

    const handleChange = (event) => {
        const targetName = event.target.name;
        console.log(targetName)
        setFormData({...formData, [targetName]: event.target.value})
    }

    const createEvent = () => {

    }

    return (
        <>
            <section className={'flex justify-center p-8'}>

                <div className={'w-full md:w-[600px]'}>
                    <h3 className={'text-2xl font-semibold mb-4'}>Create an event</h3>
                    <p>Enter your event details below</p>

                    <div className={'my-4'}>
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
