export default function Button({name}) {

    return(
        <button className="flex justify-center flex-row bg-gray-300 border border-black rounded-sm w-fit text-base px-4 py-2 gap-2">
            {name}
        </button>
    );
}