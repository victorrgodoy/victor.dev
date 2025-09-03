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
    [
      '/assets/pontolog-img/pontolog_1.png',
      '/assets/pontolog-img/pontolog_2.png',
      '/assets/pontolog-img/pontolog_3.png',
    ],
    [
      '/assets/petlover-img/petlover_1.png',
      '/assets/petlover-img/petlover_2.png',
      '/assets/petlover-img/petlover_3.png',
      '/assets/petlover-img/petlover_4.png',
      '/assets/petlover-img/petlover_5.png',
      '/assets/petlover-img/petlover_6.png',
    ],
  ];

  return (
    <section
      id="projects"
      className="bg-[var(--color-background-2)] text-[var(--color-text)] min-h-full lg:py-20 py-10 px-7"
    >
      <div className="box-border max-w-[960px] mx-auto w-full md:px-10">
        <h2 className="text-center lg:text-4xl md:text-3xl text-2xl underline underline-offset-8 decoration-[var(--color-main)] decoration-wavy mb-10">
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-10">
          {/* Projeto 1 */}
          <div className="flex-1 min-w-[300px]">
            <div className="relative pt-[56.25%] mb-2 bg-gray-600">
              <div className="absolute inset-0 flex justify-center p-6">
                <img
                  src="/assets/chatbotsql-img/chatbotsql2.png"
                  alt="Victor Godoy"
                  className="object-contain h-full shadow-xl/30 rounded-sm duration-300 hover:scale-105 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">
                  ChatBot SQL
                </h4>
                <a
                  href="https://github.com/victorrgodoy/chat-bot-sql"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="duration-300 hover:scale-110 text-2xl cursor-pointer"
                >
                  <BsGithub />
                </a>
              </div>
              <button
                onClick={() => openModal(0)}
                aria-label="Zoom Imagem"
                className="duration-300 hover:scale-110 text-2xl transition-transform cursor-pointer "
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
          <div className="flex-1 min-w-[300px]">
            <img
              src="/assets/pontolog-img/pontolog_1.png"
              alt="Victor Godoy"
              className="w-full h-auto object-contain  rounded-sm duration-300 hover:scale-102 mb-2 cursor-pointer"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">
                  PontoLog
                </h4>
                <a
                  href="https://github.com/CodeDontBlow/PontoLog"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="duration-300 cursor-pointer hover:scale-110 text-2xl"
                >
                  <BsGithub />
                </a>
              </div>
              <button
                onClick={() => openModal(1)}
                aria-label="Zoom Imagem"
                className="duration-300 hover:scale-110 text-2xl transition-transform cursor-pointer"
              >
                <BsZoomIn />
              </button>
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
          <div className="flex-1 min-w-[300px]">
            <img
              src="/assets/petlover-img/petlover_1.png"
              alt="Victor Godoy"
              className="w-full h-auto object-contain rounded-sm duration-300 hover:scale-102 mb-2 cursor-pointer"
            />

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">
                  PetLovers
                </h4>
                <a
                  href="https://github.com/victorrgodoy/pet-lover"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="duration-300 cursor-pointer hover:scale-110 text-2xl"
                >
                  <BsGithub />
                </a>
              </div>
              <button
                onClick={() => openModal(2)}
                aria-label="Zoom Imagem"
                className="duration-300 hover:scale-110 text-2xl transition-transform cursor-pointer"
              >
                <BsZoomIn />
              </button>
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
          {/* Projeto 4 */}
          <div className="flex-1 min-w-[300px]">
            <div className="relative pt-[56.25%] mb-2 bg-gray-600">
              {' '}
              {/* 16:9 aspect ratio */}
              <div className="absolute inset-0 flex justify-center p-6"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <h4 className="font-medium mb-1 text-lg text-[var(--color-main)]">
                  ...
                </h4>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="duration-300 cursor-pointer hover:scale-110 text-2xl"
                >
                  <BsGithub />
                </a>
              </div>
              {/* <button
                onClick={() => openModal(0)}
                aria-label="Zoom Imagem"
                className="duration-300 hover:scale-110 text-2xl transition-transform cursor-pointer"
              >
                <BsZoomIn />
              </button> */}
            </div>
            <p className="mb-2">...</p>
            <div className="flex gap-3 mt-2 text-sm flex-wrap">
              {[].map((tech) => (
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
          onNext={() => {
            setImageIndex((prevIndex) =>
              prevIndex < projectImages[projectIndex].length - 1
                ? prevIndex + 1
                : 0
            );
          }}
          onPrev={() => {
            setImageIndex((prevIndex) =>
              prevIndex > 0
                ? prevIndex - 1
                : projectImages[projectIndex].length - 1
            );
          }}
          onClose={() => setModalZoom(false)}
        />
      )}
    </section>
  );
}

export default Projects;
