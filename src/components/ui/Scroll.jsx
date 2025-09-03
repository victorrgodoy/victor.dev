import { BsMouse, BsChevronDown } from 'react-icons/bs';

function Scroll() {
  return (
    <a
      href="#about"
      rel="noopener noreferrer nofollow"
      className="hidden md:flex mt-3 flex-col items-center gap-1 animate-bounce cursor:pointer text-center hover:text-[var(--color-main)] transition duration-300"
    >
      <p>Scroll</p>
      <BsMouse className="mx-auto text-xl stroke-[0.4px]" />
      <BsChevronDown className="mx-auto text-md stroke-[0.4px]" />
    </a>
  );
}

export default Scroll;
