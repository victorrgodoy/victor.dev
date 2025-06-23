import { motion as _motion } from 'framer-motion'

function Hero() {
    return (
        <section className=" bg-[var(--color-background-2)] text-[var(--color-text)] min-h-full px-6 flex mt-[80px]">
            <div className="box-border max-w-[960px] mx-auto w-full grid grid-cols-3 gap-x-[40px] my-30">
                <div className="col-span-2">
                    <p className="text-lg  mb-3 font-semibold text-[var(--color-main)]">
                        Hello, my name is
                    </p>
                 <_motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{duration: 0.4,}}
                        className="text-5xl font-semibold mb-4"
                    >
                    Victor Godoy
                    </_motion.h1>
                    <_motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="text-4xl mb-3 font-semibold text-[var(--color-main)]">
                        A Full-stack Developer
                    </_motion.h2>
                    <p>
                        Technology student passionate about
                        building modern web applications and
                        AI-driven solutions.
                    </p>
                    <div className="mt-4 text-left">
                        <p>Experienced in:</p>
                        <ul className="list-none  space-y-1">
                            <li>
                                <strong>Backend:</strong>{' '}
                                Node.js, Express, Java,
                                Spring Boot, Python
                            </li>
                            <li>
                                <strong>Frontend:</strong>{' '}
                                React, Tailwind CSS
                            </li>
                            <li>
                                <strong>Database:</strong>{' '}
                                PostgreSQL, MySQL
                            </li>
                        </ul>
                    </div>
                </div>
               <div className="flex items-center justify-center">
                    <img
                        src="src/assets/victor-dev.png" 
                        alt="Victor Godoy"
                        className="w-60 rounded-lg shadow-lg "
                    />
                    </div>
            </div>
        </section>
    )
}

export default Hero
