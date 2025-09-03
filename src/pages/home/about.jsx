function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-background-1)] text-[var(--color-text)] min-h-full relative px-7 lg:py-20 py-10"
    >
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center underline underline-offset-8 decoration-[var(--color-main)] decoration-wavy mb-10">
        About Me
      </h2>

      <div className="box-border max-w-[960px] mx-auto w-full flex lg:flex-row flex-col md:gap-15 gap-5 items-center md:px-10">
        <div>
          <img
            src="/assets/victor.jpeg"
            alt="Victor Godoy"
            className="rounded-xl lg:w-fit w-70"
          />
        </div>
        <div>
          <p className="mb-6">
            Full stack developer with a solid technical background and a strong
            focus on building efficient, scalable solutions. I have experience
            in both frontend and backend development, and I apply analytical
            thinking — enhanced by my background in engineering — to solve
            problems in a logical and structured way.
          </p>
          <p className="mb-6">Below is my academic background:</p>

          <h3 className="text-[var(--color-main)] text-xl">
            Systems Analysis and Development
          </h3>
          <p className="italic">
            FATEC – State of São Paulo Technological College | 2023 ~ 2026
          </p>
          <ul className="mx-2 list-disc list-inside mb-6 marker:text-[var(--color-main)]">
            <li>Full stack development</li>
            <li>Data structures</li>
            <li>Artificial Intelligence</li>
            <li>Object-Oriented Programming</li>
            <li>Scrum</li>
          </ul>

          <h3 className="text-[var(--color-main)] text-xl">
            Certifications & Awards
          </h3>
          <ul className="mx-2 list-disc list-inside mb-6 marker:text-[var(--color-main)]">
            <li>Microsoft Certification: Azure Fundamentals – 2023</li>
            <li>2nd Place – Internal Programming Marathon, FATEC – 2023</li>
          </ul>

          <h3 className="text-[var(--color-main)] text-xl">Languages</h3>
          <ul className="mx-2 list-disc list-inside marker:text-[var(--color-main)]">
            <li>Portuguese: Native</li>
            <li>English: Intermediate</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
