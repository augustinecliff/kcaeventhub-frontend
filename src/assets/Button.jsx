export default function Button({name, onPress}) {
    console.log(onPress)

    return(
        <button onClick={onPress} className="flex justify-center flex-row bg-gray-300 border border-black rounded-sm w-fit text-base px-4 py-2 gap-2">
            {name}
        </button>
    );
}
