import { motion as _motion } from 'framer-motion';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[var(--color-background-2)] text-[var(--color-text)] min-h-full flex flex-col mt-[84px] py-30 md:px-15 px-5"
    >
      <span 
      aria-hidden="true" 
      className="absolute inset-0 rotate-8 text-[var(--color-text)] font-[1000] text-[12rem] opacity-1 z-0 text-center"
    >
      <span className="block leading-none">PROGRAMMER</span>
      <span className="block leading-none">VICTOR.DEV</span>
      <span className="block leading-none">DEVELOPER</span>
      <span className="block leading-none">FULL-STACK</span>
    </span>
      <div className="box-border max-w-[960px] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-10 z-10">
        <div className="lg:col-span-2 ">
          <p className="lg:text-lg text-sm lg:mb-7 mb-4 font-bold text-[var(--color-main)]">
            Hello, my name is
          </p>
          <_motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 0.4 }}
            className="lg:text-6xl md:text-5xl text-4xl font-bold lg:mb-5 mb-2"
          >
            Victor Godoy
          </_motion.h1>
          <_motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="lg:text-5xl md:text-3xl text-2xl lg:mb-3 font-semibold text-[var(--color-main)]"
          >
            A Full-stack Developer
          </_motion.h2>
          <p className="mb-2">
            Technology student passionate about building modern web applications
            and AI-driven solutions.
          </p>
          <div className="text-left mb-4">
            <p>Experienced in:</p>
            <ul className="list-none  space-y-1">
              <li>Backend: Node.js, Express, Java, Spring Boot, Python</li>
              <li>Frontend: React, Tailwind CSS</li>
              <li>Database: PostgreSQL, MySQL</li>
            </ul>
          </div>
          <div className=" transform flex gap-4 text-[var(--color-text)]">
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
          </div>
        </div>

        <_motion.img
          src="/assets/victor-dev.png"
          alt="Victor Godoy"
          className="w-full lg:mb-0 lg:row-span-1 lg:col-start-3 mx-auto"
          animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
