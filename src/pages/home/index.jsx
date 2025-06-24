import Hero from './hero'
import About from './about'
import Projects from './projects'
import { useState, useEffect } from 'react';

function HomePage() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.6 });
        sections.forEach(section => {
            observer.observe(section);
        });
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const sections = [ 'hero', 'about', 'projects' ];
        
    return (
        <div className='bg-[var(--color-background-1)]'>
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-8 mx-10 ">
            {sections.map((section) => (
                <a
                    key={section}
                    href={`#${section}`}
                    className={`w-3 h-3 border-1 border-[var(--color-main)] hover:bg-[var(--color-main)] hover:rotate-45 transition duration-300 hover:scale-120 ${activeSection === section ? 'bg-[var(--color-main)]' : ''}`}
                />
            ))}
            </div>
            <Hero />
            <About />
            <Projects />
        </div>
    )
}

export default HomePage
