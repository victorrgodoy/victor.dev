import { BsGithub, BsZoomIn } from 'react-icons/bs';
import { useState } from 'react';
import Modal from '../../components/ui/modal';

function Projects() {
  const [modalZoom, setModalZoom] = useState(false);
  const [projectIndex, setProjectIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (projectIndex) => {
    setProjectIndex(projectIndex);
    setImageIndex(0);
    setModalZoom(true);
  };

  const projectImages = [
    [
      '/assets/chatbotsql-img/chatbotsql.png',
      '/assets/chatbotsql-img/chatbotsql2.png',
    ],
  ];

  return (
    <section
      id="projects"
      className="bg-[var(--color-background-2)] text-[var(--color-text)] min-h-full px-5 md:px-15"
    >
      <div className="box-border max-w-[960px] mx-auto w-full lg:py-30 py-20">
        <h2 className="text-center lg:text-4xl md:text-3xl text-2xl underline underline-offset-8 decoration-[var(--color-main)] decoration-wavy mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Projeto 1 */}
          <div>
        <div className="lg:h-60 md:h-56 bg-gray-600 mb-2 flex justify-center items-center gap-3 p-4">
            <img
                src="/assets/chatbotsql-img/chatbotsql.png"
                alt="Victor Godoy"
                className="h-full rounded-xl"
            />
            <img
                src="/assets/chatbotsql-img/chatbotsql2.png"
                alt="Victor Godoy"
                className="h-full rounded-xl"
            />
        </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-4">
                <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">
                  ChatBot SQL
                </h4>
                <a
                  href="https://github.com/victorrgodoy/chat-bot-sql"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className=" duration-100 cursor-auto hover:scale-110 text-2xl"
                >
                  <BsGithub />
                </a>
              </div>
              <button
                onClick={() => openModal(0)}
                aria-label="Zoom Imagem"
                className="duration-100 hover:scale-110 text-xl transition-transform cursor-pointer"
              >
                <BsZoomIn />
              </button>
            </div>
            <p className="mb-2">
              An AI-powered SQL chatbot that interprets natural language and
              queries databases directly. Features a clean UI and supports both
              English and Portuguese.
            </p>
            <div className="flex gap-3 mt-2 text-sm flex-wrap">
              {['Java', 'Ollama', 'MySQL', 'JavaSwing', 'LLM'].map((tech) => (
                <p
                  key={tech}
                  className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>

          {/* Projeto 2 */}
          <div>
            <div className="w-full h-[240px] bg-gray-600 mb-2 flex items-center justify-center py-6">
              {/* <img src="/assets/pontolog.png" alt="Victor Godoy" className="h-full max-h-full rounded-lg shadow-2xl object-contain" /> */}
            </div>
            <div className="flex gap-4">
              <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">
                PontoLog
              </h4>
              <a
                href="https://github.com/CodeDontBlow/PontoLog"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="cursor-auto hover:scale-110 text-2xl"
              >
                <BsGithub />
              </a>
            </div>
            <p className="mb-2">
              A web platform that analyzes foreign trade data, enabling users to
              easily visualize the performance of Brazilian states and regional
              trends.
            </p>
            <div className="flex gap-3 mt-2 text-sm flex-wrap">
              {[
                'React.js',
                'Typescript',
                'Express',
                'PostgreSQL',
                'Redis',
                'Python',
              ].map((tech) => (
                <p
                  key={tech}
                  className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>

          {/* Projeto 3 */}
          <div>
            <div className="w-full h-[240px] bg-gray-600 mb-2 flex items-center justify-center py-6" />
            <div className="flex gap-4">
              <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">
                PetLovers
              </h4>
              <a
                href="https://github.com/CodeDontBlow/PontoLog"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="cursor-auto hover:scale-110 text-2xl"
              >
                <BsGithub />
              </a>
            </div>
            <p className="mb-2">
              A management system for pet shops, handling customers, pets,
              products, and services, with consumption tracking and analytics
              generation.
            </p>
            <div className="flex gap-3 mt-2 text-sm flex-wrap">
              {[
                'React.js',
                'Typescript',
                'Express',
                'PostgreSQL',
                'Bootstrap',
              ].map((tech) => (
                <p
                  key={tech}
                  className="shadow-lg bg-[var(--color-main-2)] rounded-sm px-2 py-1"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalZoom && (
        <Modal
          images={projectImages[projectIndex]}
          current={imageIndex}
          onNext={() => setImageIndex(1)}
          onPrev={() => setImageIndex(0)}
          onClose={() => setModalZoom(false)}
        />
      )}
    </section>
  );
}

export default Projects;
