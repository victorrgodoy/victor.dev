import { motion as _motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import Scroll from '../../components/ui/Scroll';

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[var(--color-background-2)] text-[var(--color-text)] min-h-full mt-16 lg:py-30 pb-20 flex flex-col items-center px-7"
    >
        <div className="box-border max-w-[960px] w-full flex flex-col-reverse lg:flex-row gap-x-10 items-center md:px-10">
        <div className="lg:col-span-2">
          <p className="text-lg lg:mb-7 mb-4 font-medium text-[var(--color-main)]">
            Hello, my name is
          </p>
          <_motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 0.4 }}
            className="font-[Poppins] lg:text-6xl text-4xl font-semibold lg:mb-5 mb-2"
          >
            Victor Godoy
          </_motion.h1>
          <_motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="lg:text-[2.5rem] text-4xl lg:mb-3 font-medium text-[var(--color-main)]"
          >
            A Full-stack Developer
          </_motion.h2>
          <p className='mb-6'>
            Full Stack Developer specializing in modern web applications and AI-driven solutions with Large Language Models. Dedicated to solving complex problems through meticulous organization, attention to detail, and innovative technical approaches.
          </p>
          <div className=" transform flex gap-4 text-[var(--color-text)]">
            <Button/>
          </div>
        </div>

        <_motion.img
          src="/assets/victor-dev.png"
          alt="Victor Godoy"
          className="lg:w-80 w-64 lg:col-3 flex-nowrap"
          animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>
      <Scroll/>
    </section>
  );
}

export default Hero;
