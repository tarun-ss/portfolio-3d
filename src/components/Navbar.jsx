import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between p-4">
      {/* Home Link */}
      <NavLink
        to="/"
        className="px-4 py-2 rounded-lg bg-white flex items-center justify-center font-bold shadow-md text-black-500"
      >
        <p className="text-lg">Home</p>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex text-lg gap-4 font-medium">
        
        {/* About Section - Same Style as Projects */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg flex items-center justify-center transition-all ${
              isActive
                ? 'bg-blue-500 text-white font-extrabold'
                : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white transition hover:shadow-lg font-extrabold'
            } shadow-md`
          }
        >
          About
        </NavLink>
        
        {/* Projects Section */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg flex items-center justify-center transition-all ${
              isActive
                ? 'bg-blue-500 text-white font-extrabold'
                : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white transition hover:shadow-lg font-extrabold'
            } shadow-md`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
