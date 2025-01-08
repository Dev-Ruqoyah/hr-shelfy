import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-transparent mx-auto lg:w-[50%] md:w-[70%] w-[98%] border rounded-badge">
        <div className="flex items-center justify-between  w-full">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              hr-shelfly
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-none">
            <ul className="menu menu-horizontal md:gap-3  px-1">
              {/* Home */}
              <li>
                <NavLink 
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "hover:text-secondary"
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* Browse */}
              <li>
                <NavLink 
                  to="/search"
                  className={({ isActive }) =>
                    isActive ? "text-primary font-bold" : "hover:text-secondary"
                  }
                >
                  Browse
                </NavLink>
              </li>

              {/* Dropdown Menu */}
              <li>
                <details>
                  <summary className="cursor-pointer hover:text-secondary">
                    Genres
                  </summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <NavLink to="/genre/fiction" className="hover:text-secondary">
                        Fiction
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/genre/non-fiction" className="hover:text-secondary">
                        Non-Fiction
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/genre/romance" className="hover:text-secondary">
                        Romance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/genre/mystery" className="hover:text-secondary">
                        Mystery
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
