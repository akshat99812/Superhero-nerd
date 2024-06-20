
interface ButtonProps{
    text:string;

}

export const Button:React.FC<ButtonProps>=({text})=>{


    return (

        <div>
            <button className="p-2 pl-9 pr-9 btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white group">
            <span className="w-0 h-0 rounded bg-slate-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            {text}
            </span>
            </button>
        </div>
    )
}