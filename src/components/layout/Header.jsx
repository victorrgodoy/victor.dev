import { NavLink } from "react-router-dom";
import { BsList, BsSun, BsMoon } from 'react-icons/bs';
import { useState, useEffect } from "react";

function Header(){
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const toggleTheme = () => { 
        setIsDark(!isDark);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const links = [
        { path: '/about', name: 'About.html' },
        { path: '/project', name: 'Project.css' }
    ];

    return(
            <div class="text-[var(--color-text)] bg-[var(--color-background)] px-6">
            <header className="h-[84px] flex justify-between items-center box-border max-w-[960px] mx-auto w-full">
                <h1>
                    <NavLink to="/" className=" text-xl font-medium hover:text-blue-400">
                        VictorGodoy<span className="text-blue-400">.dev</span>
                    </NavLink>
                </h1>
                
                <nav className="flex gap-10">
                    <ul className="gap-10 sm:flex hidden">
                        {links.map((link) => (
                            <li key={link.path}>
                                <NavLink 
                                    to={link.path} 
                                    className={({ isActive}) =>
                                    [   
                                        isActive ? 'text-blue-400 py-2 inline-block' : "hover:text-blue-400 py-2 inline-block",
                                    ].join(' ')}>
                                    {link.name}    
                                </NavLink>
                            </li> 
                        ))}     
                    </ul>
                   <button
                        onClick={toggleTheme}
                        className={`text-2xl hover:text-blue-400 cursor-pointer sm:block hidden transition-transform duration-500 ${
                            isDark ? 'rotate-90' : 'rotate-0'
                        }`}
                        >
                        {isDark ? <BsSun /> : <BsMoon />}
                    </button>
                    <button onClick={toggleMenu} className="text-2xl hover:text-blue-400 cursor-pointer sm:hidden">
                        <BsList />
                    </button>        
                </nav>
            </header> 
            <div className="border-t border-blue-400 w-full max-w-[960px] mx-auto"/>   
                {isMenuOpen && (
                    <div className="sm:hidden bg-[var(--color-background)] text-[var(--color-text)] py-5 flex flex-col items-center gap-4 text-center">
                           <button onClick={toggleTheme} className={`text-2xl hover:text-blue-400 cursor-pointer transition-transform duration-500
                           ${isDark ? 'rotate-90' : 'rotate-0'}`}>
                                {isDark ? <BsSun /> : <BsMoon />}
                            </button>
                        <ul>
                            {links.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            [
                                                isActive ? 'text-blue-400 py-2 inline-block' : "hover:text-blue-400 py-2 inline-block",
                                            ].join(' ')}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>    
                )}
                
        </div>
    )
}
export default Header











    // <div className="
        //         w-full
        //         max-w-[calc(12*40px+11*40px)] /* (12 colunas + 11 gutters) */
        //         mx-auto /* Centraliza horizontalmente */
        //         grid 
        //         grid-cols-12 
        //         gap-[40px] 
        //         items-center 
        //         justify-items-center /* Centraliza conteúdo das células */
        //         h-screen
        //         px-4 /* Padding para evitar colar nas bordas em mobile */
        //         "> 
        //      <div className="
        //             md:col-span-4 
        //             order-1 md:order-none
        //             text-center md:text-left
        //         ">
        //         <p>Olá, meu nome é</p>
        //         <h1>Victor Godoy</h1>
        //         <p>Desenvolvedor Full-Stack</p>
        //     </div>

        //     <div className="col-9">
        //         <img src="/images/profile.png" alt="Victor Godoy" className="w-full h-auto bg-amber-400"/>
        //     </div>
        // </div>