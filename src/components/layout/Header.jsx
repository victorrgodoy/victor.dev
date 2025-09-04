import { BsList, BsSun, BsMoon } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { motion as _motion } from 'framer-motion';

function Header() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { path: '#about', name: 'About me' },
    { path: '#projects', name: 'Projects' },
    { path: '#contact', name: 'Contact' },
  ];

  return (
    <div className="fixed z-10 top-0 left-0 right-0 w-full text-[var(--color-text)] bg-[var(--color-background-2)]/70 backdrop-blur-md md:px-15 px-7 shadow-sm">
      <header className="top-0 h-16 py-3 flex justify-between items-center box-border max-w-[960px] mx-auto w-full">
        <h1>
          <a
            href="#"
            className="text-xl font-normal hover:text-[var(--color-main)]"
          >
            VictorGodoy
            <span className="text-[var(--color-main)]">.dev</span>
          </a>
        </h1>

        <nav className="flex gap-x-7">
          <ul className="gap-x-7 md:flex hidden text-lg">
            {links.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="hover:text-[var(--color-main)] py-2 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className={`md:visible invisible text-2xl hover:text-[var(--color-main)] cursor-pointer transition-transform duration-500 ${
              isDark ? 'rotate-90' : 'rotate-0'
            }`}
          >
            {isDark ? <BsSun /> : <BsMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl hover:text-[var(--color-main)] cursor-pointer md:hidden"
          >
            <BsList />
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="text-[var(--color-text)] py-5 flex flex-col items-center gap-y-4 text-center">
          <button
            onClick={toggleTheme}
            className={`text-2xl hover:text-[var(--color-main)] cursor-pointer transition-transform duration-500 ${
              isDark ? 'rotate-90' : 'rotate-0'
            }`}
          >
            {isDark ? <BsSun /> : <BsMoon />}
          </button>
          <ul className="flex flex-col gap-y-4">
            {links.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="hover:text-[var(--color-main)] py-2 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
