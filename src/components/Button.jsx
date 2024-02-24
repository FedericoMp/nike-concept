const Button = ({label, iconUrl}) => {
    return (
        <button className="flex justify-center items-center border-coral-red bg-coral-red text-white gap-2 rounded-full p-3 px-7 py-4 font-montserrat text-lg leading-none">
            {label}
            {iconUrl && <img src={iconUrl} alt="button icon" className="ml-2 rounded-full bg-white w-5 h-5" />}
        </button>
    )
}

export default Button