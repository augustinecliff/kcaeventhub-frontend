import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {LoginModal} from "../authentication/modal/Login.jsx";
import {CreateAccountModal} from "../authentication/modal/CreateAccount.jsx";
import {loggedInUser, logoutUser} from "../utils/AuthService.js";

export function Navigation() {
    const [showDiv, setShowDiv] = useState(true);

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setShowDiv(false);
            } else {
                setShowDiv(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        loggedInUser();
    }, []);

    return (
        <div className="flex flex-row justify-between mb-6 text-center">
            <div className="flex flex-row gap-1 justify-center items-center">
                <svg width="73" height="44" viewBox="0 0 73 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.631 37.5579L11.6641 38.5791V36.8771C26.5855 25.0021 26.1928 20.9355 11.6641 18.1549V15.2047L19.4033 16.1124C19.8375 15.2133 15.707 14.4104 8.54533 12.9353C4.55366 12.1132 1.88971 10.9033 0.313479 9.99325C-0.272973 9.65467 0.0252824 8.9782 0.697639 9.07962C25.1135 12.7627 41.6542 11.2502 66.5314 0L67.9175 1.47508C62.1483 6.22827 70.1122 6.46767 71.7294 4.53872L73 5.6734C59.1175 24.4634 42.8235 34.3789 5.05275 43.9915C4.78728 44.0591 4.63193 43.7032 4.8751 43.5787L16.631 37.5579Z"
                        fill="black"/>
                    <path
                        d="M25.2943 19.788L25.6408 19.403C28.9906 21.6724 28.9906 27.1188 25.4098 31.771C47.4333 24.4538 54.6339 19.1761 65.7229 8.96397L65.2608 8.51009C62.142 9.64477 59.3698 7.94275 62.142 5.33299L61.911 4.99259C47.1606 12.8335 39.3359 15.4538 22.4065 15.2047C21.1359 15.186 21.1868 13.5141 22.4065 13.5027C39.4541 13.3427 47.5953 11.4384 62.0265 4.08485L63.0661 5.33299C60.355 7.56562 62.142 8.96397 65.4918 7.71582L66.5314 8.96397C53.1642 23.5515 42.3826 29.0047 21.7815 35.6365C20.5872 36.0209 19.6644 34.4532 20.5498 33.5769C25.2359 28.9386 28.5426 23.8304 25.2943 19.788Z"
                        fill="white"/>
                </svg>
                <Link to="/" className="flex items-center gap-1 text-2xl hover:text-orange-700">
                    <span className="font-semibold">Event</span>
                    <span>hub</span>
                    <span className={'badge bg-orange-300 font-bold ml-4 hidden md:block'}>KCA</span>
                </Link>
            </div>
            <div className={'flex-grow'}>
                {
                    showDiv &&
                    <nav className="flex flex-row flex-wrap justify-end items-center md: text-base gap-x-6">
                        <div><Link to="/event_search" className="">Events</Link></div>
                        <div><Link to="/my_tickets" className="">My tickets</Link></div>
                        <Link to={"/create_event"}>
                            <button className={'btn btn-primary text-white'}>Create Event</button>
                        </Link>

                        {
                            loggedInUser()?.email ? (
                                <div className={'group relative'}>
                                    <div
                                        className={'w-12 h-12 rounded-full bg-orange-200 uppercase text-2xl flex justify-center items-center font-light'}>
                                        {loggedInUser().email.slice(0, 1)}
                                    </div>
                                    <ul className="text-left menu bg-base-200 rounded-box w-44 absolute right-0 hidden group-hover:block z-10">
                                        <li><a>Welcome <span className={'font-bold'}>{loggedInUser().firstName}</span></a></li>
                                        <li onClick={() => logoutUser()}><a>Logout</a></li>
                                    </ul>
                                </div>
                            ) : (
                                <button className={'btn'}
                                        onClick={() => document.getElementById('login_modal').showModal()}>Login
                                </button>
                            )
                        }


                    </nav>
                    ||
                    !showDiv &&
                    <div className="flex flex-row justify-end items-center text-base gap-x-1">

                        <div className="drawer w-fit">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>

                            <div className={'flex justify-end gap-4 w-full'}>
                                <button className={'btn btn-primary text-white'}
                                        onClick={() => document.getElementById('login_modal').showModal()}>Login
                                </button>
                                <label htmlFor="my-drawer" className="btn drawer-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none">
                                        <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="black"/>
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar"
                                       className="drawer-overlay"></label>
                                <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
                                    <li><Link to={'/'}>Events</Link></li>
                                    <li><Link to={'/my_tickets'}>My Tickets</Link></li>
                                    <li><Link to={'/create_event'}>Create Event</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                }
            </div>


            <dialog id="login_modal" className="modal">
                <LoginModal/>
            </dialog>

            <dialog id="register_modal" className="modal">
                <CreateAccountModal showDefault={true}/>
            </dialog>

        </div>

    );
}
