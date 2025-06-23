import { BsGithub } from 'react-icons/bs';

function Projects() {
    return (
        <section id="projects" className="bg-[var(--color-background-2)] text-[var(--color-text)] min-h-screen px-6 flex">
            <div className="box-border max-w-[960px] mx-auto w-full grid grid-cols-2 gap-20 my-30">
                
                <h2 className="col-span-2 text-center text-3xl underline underline-offset-8 decoration-[var(--color-main)] decoration-wavy mb-6">
                    Featured Projects
                </h2>

                <div className="space-y-6">
                    <div>
                        <div className="w-full h-58 bg-[var(--color-main)] mb-2" />
                        <div className="flex gap-4">
                            <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">PontoLog</h4>
                            <a href="https://github.com/CodeDontBlow/PontoLog" target="_blank" rel="noopener noreferrer nofollow" className="cursor-auto hover:scale-110 text-2xl">
                                <BsGithub />
                            </a>
                        </div>
                        <p className="mb-2">
                            A web platform that analyzes foreign trade data, enabling users to easily visualize the performance of Brazilian states and regional trends.
                        </p>
                        <div className="flex gap-3 mt-2 text-sm mb-15 flex-wrap">
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">React.js</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Typescript</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Express</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">PostgreSQL</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Redis</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Python</p>
                        </div>
                    </div>

                    <div>
                        <div className="w-full h-58 bg-[var(--color-main)] mb-2" />
                        <div className="flex gap-4">
                            <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">PetLovers</h4>
                            <a href="https://github.com/CodeDontBlow/PontoLog" target="_blank" rel="noopener noreferrer nofollow" className="cursor-auto hover:scale-110 text-2xl">
                                <BsGithub />
                            </a>
                        </div>
                        <p className="mb-2">
                            A management system for pet shops, handling customers, pets, products, and services, with consumption tracking and analytics generation.
                        </p>
                        <div className="flex gap-3 mt-2 text-sm mb-15 flex-wrap">
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">React.js</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Typescript</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Express</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">PostgreSQL</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Bootstrap</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="w-full h-58 bg-[var(--color-main)] mb-2" />
                        <div className="flex gap-4">
                            <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">ChatBot SQL</h4>
                            <a href="https://github.com/CodeDontBlow/PontoLog" target="_blank" rel="noopener noreferrer nofollow" className="cursor-auto hover:scale-110 text-2xl">
                                <BsGithub />
                            </a>
                        </div>
                        <p className="mb-2">
                            An AI-powered SQL chatbot that interprets natural language and queries databases directly.
                            Features a clean UI and supports both English and Portuguese.
                        </p>
                        <div className="flex gap-3 mt-2 text-sm mb-15 flex-wrap">
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Java</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">Ollama</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">MySQL</p>
                            <p className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">JavaSwing</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;