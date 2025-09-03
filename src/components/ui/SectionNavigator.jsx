import { useState, useEffect } from 'react';

function SectionNavigator() {
    const [activeSection, setActiveSection] = useState('hero');
    const sections = ['hero', 'about', 'projects'];
    
      useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.6 }
        );
        sections.forEach((section) => {
          observer.observe(section);
        });
        return () => {
          sections.forEach((section) => {
            observer.unobserve(section);
          });
        };
      }, []);
    return(
        <div className="hidden md:flex fixed top-1/2 transform -translate-y-1/2  flex-col gap-8 left-7">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`w-3 h-3 border-1 border-[var(--color-main)] hover:bg-[var(--color-main)] hover:rotate-45 transition duration-300 hover:scale-120 ${activeSection === section ? 'bg-[var(--color-main)]' : ''}`}
          />
        ))}
      </div>
    );
}

export default SectionNavigator;