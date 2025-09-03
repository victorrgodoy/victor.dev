import { motion as _motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import Scroll from '../../components/ui/Scroll';

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[var(--color-background-2)] text-[var(--color-text)] min-h-full mt-16 md:py-20 py-10 flex flex-col items-center px-7"
    >
      <div className="box-border max-w-[960px] w-full flex flex-col-reverse md:flex-row gap-x-10 items-center md:px-10">
        <div className="lg:col-span-2">
          <p className="text-lg lg:mb-7 mb-4 font-medium text-[var(--color-main)]">
            Hello, my name is
          </p>
          <_motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 0.4 }}
            className="font-[Poppins] lg:text-6xl md:text-5xl text-4xl font-semibold lg:mb-5 mb-2"
          >
            Victor Godoy
          </_motion.h1>
          <_motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="lg:text-5xl md:text-[2rem] sm:text-3xl text-3xl lg:mb-3 font-medium text-[var(--color-main)]"
          >
            A Full-stack Developer
          </_motion.h2>
          <p className="mb-6">
            Full Stack Developer specializing in modern web applications and
            AI-driven solutions with Large Language Models. Dedicated to solving
            complex problems through meticulous organization, attention to
            detail, and innovative technical approaches.
          </p>
          <Button text="Contact me!" />
        </div>

        <_motion.img
          src="/assets/victor-dev.png"
          alt="Victor Godoy"
          className="lg:w-70 w-60 lg:col-3 flex-nowrap"
          animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>
      <Scroll />
    </section>
  );
}

export default Hero;
