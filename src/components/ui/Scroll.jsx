import { BsMouse } from "react-icons/bs";

function Scroll(){
    return (
        <div className="hidden md:flex mt-3 flex-col items-center gap-2 animate-bounce">
            <p>Scroll</p>
             <a
                href="#about"
                rel="noopener noreferrer nofollow"
                className="cursor:auto hover:scale-110 text-2xl hover:text-[var(--color-main)] transition duration-300"
            >
                <BsMouse />
            </a>
        </div>
    )
    
}

export default Scroll;