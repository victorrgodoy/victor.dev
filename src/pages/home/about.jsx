function About() {
    return (
        <section id="about" className="bg-[var(--color-background-1)] text-[var(--color-text)] min-h-full px-6 flex">
            <div className="box-border max-w-[960px] mx-auto w-full my-30">
                <h2 
                className="text-3xl underline underline-offset-8 decoration-[var(--color-main)] decoration-wavy mb-6">
                    About Me
                </h2>
                <p className="mb-6">
                    Full stack developer with a solid technical background and a strong focus on building efficient, scalable solutions. 
                    I have experience in both frontend and backend development, and I apply analytical thinking — enhanced by my background in engineering — 
                    to solve problems in a logical and structured way.
                </p>
                <p className="mb-6">Below is my academic background:</p>

                <h3 className="text-[var(--color-main)] text-xl">Systems Analysis and Development</h3>
                <p className="italic">FATEC – State of São Paulo Technological College | 2023 ~ 2026</p>
                <ul className="mx-2 list-disc list-inside mb-6 marker:text-[var(--color-main)]">
                    <li>Full stack development</li>
                    <li>Data structures</li>
                    <li>Artificial Intelligence</li>
                    <li>Object-Oriented Programming</li>
                    <li>Scrum</li>
                </ul>

                <h3 className="text-[var(--color-main)] text-xl">Certifications & Awards</h3>
                <ul className="mx-2 list-disc list-inside mb-6 marker:text-[var(--color-main)]">
                    <li>Microsoft Certification: Azure Fundamentals – 2023</li>
                    <li>2nd Place – Internal Programming Marathon, FATEC – 2023</li>
                </ul>

                <h3 className="text-[var(--color-main)] text-xl">Languages</h3>
                <ul className="mx-2 list-disc list-inside mb-6 marker:text-[var(--color-main)]">
                    <li>Portuguese: Native</li>
                    <li>English: Intermediate</li>
                </ul>
            </div>
        </section>
    );
}

export default About;