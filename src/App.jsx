import {Navigation} from "./assets/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import EventDetails from "./pages/event/EventDetails.jsx";
import EventHostPage from "./pages/event/EventHostPage.jsx";
import Home from "./pages/home/Home.jsx";
import EventSearch from "./pages/eventSearch/EventSearch.jsx";
import {Footer} from "./assets/Footer.jsx";
import MyTickets from "./pages/ticket/MyTickets.jsx";
import {CreateEvent} from "./pages/event/CreateEvent.jsx";

export const baseUrl = "http://192.168.1.104:8080";

function App() {

    return (
        <>
            <div className="w-screen flex justify-center mb-6 px-2">
                <div className="border border-none w-full md:w-8/12  rounded-2xl pt-2.5">
                    <Navigation/>
                    <Routes>
                        <Route index={true} path="/" element={<Home/>}></Route>
                        <Route path="/event_search" element={<Home/>}></Route> {/*EventSearch*/}
                        <Route path="/event_details/:eventId" element={<EventDetails/>}></Route>
                        <Route path="/event_host" element={<EventHostPage/>}></Route>
                        <Route path="/create_event" element={<CreateEvent/>}></Route>
                        <Route path="/my_tickets" element={<MyTickets/>}></Route>
                        <Route path="*"
                               element={<p style={{color: "red"}}>Error handling Page <b>pending ... </b></p>}></Route>
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </>
    );
}


export default App;
