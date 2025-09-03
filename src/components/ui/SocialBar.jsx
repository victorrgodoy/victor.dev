import { BsGithub, BsLinkedin } from "react-icons/bs";

function SocialBar(){
    return(
        <div className="hidden md:flex fixed bottom-0.5 right-7 flex-col gap-4 text-white items-center">
             <a
              href="https://github.com/victorrgodoy"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cursor:auto hover:scale-110 text-2xl hover:text-[var(--color-main)] transition duration-300"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/victorgodoy-/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cursor:auto hover:scale-110 text-2xl hover:text-[var(--color-main)] transition duration-300"
            >
              <BsLinkedin />
            </a>
            <hr className="h-28 w-[3px] bg-white"/>
        </div>
    )
}

export default SocialBar;