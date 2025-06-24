import { BsGithub } from 'react-icons/bs';

function Projects() {
    return (
      <section id="projects" className="bg-[var(--color-background-2)] text-[var(--color-text)] min-h-screen px-5 md:px-15">
  <div className="box-border max-w-[960px] mx-auto w-full lg:my-30 py-20">
    
    <h2 className="text-center text-2xl lg:text-3xl underline underline-offset-8 decoration-[var(--color-main)] decoration-wavy mb-20">
      Featured Projects
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Projeto 1 */}
      <div>
        <div className="w-full h-[240px] bg-gray-600 mb-2 flex items-center justify-center py-6">
          {/* <img src="/assets/pontolog.png" alt="Victor Godoy" className="h-full max-h-full rounded-lg shadow-2xl object-contain" /> */}
        </div>
        <div className="flex gap-4">
          <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">PontoLog</h4>
          <a href="https://github.com/CodeDontBlow/PontoLog" target="_blank" rel="noopener noreferrer nofollow" className="cursor-auto hover:scale-110 text-2xl">
            <BsGithub />
          </a>
        </div>
        <p className="mb-2">
          A web platform that analyzes foreign trade data, enabling users to easily visualize the performance of Brazilian states and regional trends.
        </p>
        <div className="flex gap-3 mt-2 text-sm flex-wrap">
          {['React.js', 'Typescript', 'Express', 'PostgreSQL', 'Redis', 'Python'].map((tech) => (
            <p key={tech} className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">{tech}</p>
          ))}
        </div>
      </div>

      {/* Projeto 2 */}
      <div>
        <div className="w-full h-[240px] bg-gray-600 mb-2 flex items-center justify-center py-6" />
        <div className="flex gap-4">
          <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">PetLovers</h4>
          <a href="https://github.com/CodeDontBlow/PontoLog" target="_blank" rel="noopener noreferrer nofollow" className="cursor-auto hover:scale-110 text-2xl">
            <BsGithub />
          </a>
        </div>
        <p className="mb-2">
          A management system for pet shops, handling customers, pets, products, and services, with consumption tracking and analytics generation.
        </p>
        <div className="flex gap-3 mt-2 text-sm flex-wrap">
          {['React.js', 'Typescript', 'Express', 'PostgreSQL', 'Bootstrap'].map((tech) => (
            <p key={tech} className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">{tech}</p>
          ))}
        </div>
      </div>

      {/* Projeto 3 */}
      <div>
        <div className="w-full h-[240px] bg-gray-600 mb-2 flex items-center justify-center py-6">
          {/* <img src="/assets/chatbotsql.png" alt="Victor Godoy" className="h-full max-h-full rounded-lg shadow-2xl object-contain" /> */}
        </div>
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
        <div className="flex gap-3 mt-2 text-sm flex-wrap">
          {['Java', 'Ollama', 'MySQL', 'JavaSwing'].map((tech) => (
            <p key={tech} className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1">{tech}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default Projects;