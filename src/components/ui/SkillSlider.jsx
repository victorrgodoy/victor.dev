import Marquee from "react-fast-marquee";
import {  SiReact, SiTypescript, SiNodedotjs} from "react-icons/si";

function SkillSlider() {
  return (
    <div className="bg-[var(--color-background-2)] py-5">
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-16 text-6xl text-[var(--color-main)]">
          <SiReact />
          <SiTypescript />
          <SiNodedotjs />
        </div>
      </Marquee>
    </div>
  );
}

export default SkillSlider;