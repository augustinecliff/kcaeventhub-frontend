import EventGroup from "../../assets/Event-Group.jsx";
import SocialMedia from "../../assets/SocialMedia.jsx";
import Button from "../../assets/Button.jsx";

export default function EventDetails() {

    return(
        <>
            <div className="flex flex-col justify-end  w-full mb-6 rounded-2xl px-6 sm:px-6 bg-cover
            bg-[url('https://img.freepik.com/free-vector/abstract-lines-ovals-pattern-background_78370-2677.jpg?w=2000&t=st=1700639252~exp=1700639852~hmac=91a41d741a24e68fb10dedc2a10fc3676fd65d4a36c8cc8a1aef81c4d227e02c')]">
                <div className="bg-gray-100/90 flex flex-col flex-wrap justify-between items-center mt-32 mb-6 rounded-2xl p-2 sm:p-4 sm:py-10 gap-2">
                    <div className="flex justify-center w-fit font-bold text-lg sm:text-2xl">Amapiano tour Sep 2023</div>
                    <div className="flex flex-row gap-2 flex-wrap justify-center">
                        <div className="flex justify-center items-center flex-row bg-gray-300 rounded-3xl w-fit text-base px-4 py-2 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M5.673 0.5C5.85865 0.5 6.0367 0.57375 6.16797 0.705025C6.29925 0.836301 6.373 1.01435 6.373 1.2V2.509H13.89V1.209C13.89 1.02335 13.9637 0.845301 14.095 0.714025C14.2263 0.58275 14.4043 0.509 14.59 0.509C14.7757 0.509 14.9537 0.58275 15.085 0.714025C15.2162 0.845301 15.29 1.02335 15.29 1.209V2.509H18C18.5303 2.509 19.0388 2.71958 19.4139 3.09443C19.7889 3.46929 19.9997 3.97774 20 4.508V18.501C19.9997 19.0313 19.7889 19.5397 19.4139 19.9146C19.0388 20.2894 18.5303 20.5 18 20.5H2C1.46974 20.5 0.961184 20.2894 0.58614 19.9146C0.211096 19.5397 0.00026513 19.0313 0 18.501L0 4.508C0.00026513 3.97774 0.211096 3.46929 0.58614 3.09443C0.961184 2.71958 1.46974 2.509 2 2.509H4.973V1.199C4.97327 1.01352 5.04713 0.835731 5.17838 0.704672C5.30963 0.573612 5.48752 0.5 5.673 0.5ZM1.4 8.242V18.501C1.4 18.5798 1.41552 18.6578 1.44567 18.7306C1.47583 18.8034 1.52002 18.8695 1.57574 18.9253C1.63145 18.981 1.69759 19.0252 1.77039 19.0553C1.84319 19.0855 1.92121 19.101 2 19.101H18C18.0788 19.101 18.1568 19.0855 18.2296 19.0553C18.3024 19.0252 18.3685 18.981 18.4243 18.9253C18.48 18.8695 18.5242 18.8034 18.5543 18.7306C18.5845 18.6578 18.6 18.5798 18.6 18.501V8.256L1.4 8.242ZM6.667 15.119V16.785H5V15.119H6.667ZM10.833 15.119V16.785H9.167V15.119H10.833ZM15 15.119V16.785H13.333V15.119H15ZM6.667 11.142V12.808H5V11.142H6.667ZM10.833 11.142V12.808H9.167V11.142H10.833ZM15 11.142V12.808H13.333V11.142H15ZM4.973 3.908H2C1.92121 3.908 1.84319 3.92352 1.77039 3.95367C1.69759 3.98382 1.63145 4.02802 1.57574 4.08374C1.52002 4.13945 1.47583 4.20559 1.44567 4.27839C1.41552 4.35119 1.4 4.42921 1.4 4.508V6.843L18.6 6.857V4.508C18.6 4.42921 18.5845 4.35119 18.5543 4.27839C18.5242 4.20559 18.48 4.13945 18.4243 4.08374C18.3685 4.02802 18.3024 3.98382 18.2296 3.95367C18.1568 3.92352 18.0788 3.908 18 3.908H15.29V4.837C15.29 5.02265 15.2162 5.2007 15.085 5.33197C14.9537 5.46325 14.7757 5.537 14.59 5.537C14.4043 5.537 14.2263 5.46325 14.095 5.33197C13.9637 5.2007 13.89 5.02265 13.89 4.837V3.908H6.373V4.828C6.373 5.01365 6.29925 5.1917 6.16797 5.32297C6.0367 5.45425 5.85865 5.528 5.673 5.528C5.48735 5.528 5.3093 5.45425 5.17803 5.32297C5.04675 5.1917 4.973 5.01365 4.973 4.828V3.908Z" fill="black"/>
                            </svg>
                            <div>Aug 16 2023</div>
                        </div>
                        <button className={'btn btn-primary text-white rounded-full'}>Book your Ticket</button>
                    </div>
                    {/*<SocialMedia />*/}
                </div>
            </div>
            <div className="flex flex-col rounded-2xl bg-gray-100 mb-6 gap-8 p-6">
                {/*<div className="h-48 sm:h-72 bg-green-200 flex justify-between items-center w-full mb-6 rounded-2xl px-6 sm:px-6">*/}
                {/*    <div className="bg-gray-300 p-2 h-fit rounded-full">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">*/}
                {/*            <path fillRule="evenodd" clipRule="evenodd" d="M11.3539 2.14601C11.4005 2.19245 11.4374 2.24763 11.4626 2.30838C11.4878 2.36912 11.5008 2.43424 11.5008 2.50001C11.5008 2.56578 11.4878 2.6309 11.4626 2.69164C11.4374 2.75239 11.4005 2.80756 11.3539 2.85401L5.70692 8.50001L11.3539 14.146C11.4478 14.2399 11.5005 14.3672 11.5005 14.5C11.5005 14.6328 11.4478 14.7601 11.3539 14.854C11.26 14.9479 11.1327 15.0006 10.9999 15.0006C10.8671 15.0006 10.7398 14.9479 10.6459 14.854L4.64592 8.85401C4.59935 8.80756 4.56241 8.75239 4.5372 8.69164C4.512 8.6309 4.49902 8.56578 4.49902 8.50001C4.49902 8.43424 4.512 8.36912 4.5372 8.30838C4.56241 8.24763 4.59935 8.19245 4.64592 8.14601L10.6459 2.14601C10.6924 2.09945 10.7475 2.0625 10.8083 2.0373C10.869 2.01209 10.9341 1.99911 10.9999 1.99911C11.0657 1.99911 11.1308 2.01209 11.1916 2.0373C11.2523 2.0625 11.3075 2.09945 11.3539 2.14601Z" fill="black"/>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*    <div className="bg-gray-300 p-2 h-fit rounded-full">*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">*/}
                {/*            <path fillRule="evenodd" clipRule="evenodd" d="M4.64592 2.14601C4.69236 2.09945 4.74754 2.0625 4.80828 2.0373C4.86903 2.01209 4.93415 1.99911 4.99992 1.99911C5.06568 1.99911 5.13081 2.01209 5.19155 2.0373C5.2523 2.0625 5.30747 2.09945 5.35392 2.14601L11.3539 8.14601C11.4005 8.19245 11.4374 8.24763 11.4626 8.30838C11.4878 8.36912 11.5008 8.43424 11.5008 8.50001C11.5008 8.56578 11.4878 8.6309 11.4626 8.69164C11.4374 8.75239 11.4005 8.80756 11.3539 8.85401L5.35392 14.854C5.26003 14.9479 5.13269 15.0006 4.99992 15.0006C4.86714 15.0006 4.7398 14.9479 4.64592 14.854C4.55203 14.7601 4.49929 14.6328 4.49929 14.5C4.49929 14.3672 4.55203 14.2399 4.64592 14.146L10.2929 8.50001L4.64592 2.85401C4.59935 2.80756 4.56241 2.75239 4.5372 2.69164C4.512 2.6309 4.49902 2.56578 4.49902 2.50001C4.49902 2.43424 4.512 2.36912 4.5372 2.30838C4.56241 2.24763 4.59935 2.19245 4.64592 2.14601Z" fill="black"/>*/}
                {/*        </svg>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="flex flex-col items-center gap-2">
                    {/*<SocialMedia />*/}
                    {/*<Button name={"Book your ticket"}/>*/}
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 flex w-full mb-6 rounded-2xl p-2 sm:p-4 gap-6">
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

            <EventGroup />
        </>
    );
}
