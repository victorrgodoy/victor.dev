import { NavLink } from 'react-router-dom';

function Nav() {
  const links = [
    { path: '/hello', name: 'hello.html' },
    { path: '/about', name: 'about.css' },
    { path: '/project', name: 'project.js' }
  ];

  return (
    <nav className="bg-[#161F27] h-[52px] flex items-center">
      <ul className="flex">
        {links.map((link) => (
          <li key={link.path} >
            <NavLink
              to={link.path}
              className={({ isActive }) => 
                `px-[40px] py-[14px] 
                inline-block
                border-t-3
                border-[#253541]
                transition-colors ${
                  isActive
                    ? 'bg-[#1D2A34] border-[#b8d5f0]'
                    : 'bg-[#253541]'
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav