import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar    bg-primarytwo mx-auto lg:w-[50%] md:w-[70%] w-[98%] border rounded-badge">
        <div className="flex items-center justify-between  w-full">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              shelfly
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
                    isActive ? "text-supporting font-bold" : "hover:text-supporting"
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
                    isActive ? "text-primary font-bold" : "hover:text-supporting"
                  }
                >
                  Browse
                </NavLink>
              </li>

              {/* Dropdown Menu */}
              <li>
                <details>
                  <summary className="cursor-pointer hover:text-supporting">
                    Genres
                  </summary>
                  <ul className="bg-primary rounded-t-none p-2">
                    <li>
                      <NavLink to="/genre/fiction" className="hover:text-supporting">
                        Fiction
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/genre/non-fiction" className="hover:text-supporting">
                        Non-Fiction
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/genre/romance" className="hover:text-supporting">
                        Romance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/genre/mystery" className="hover:text-supporting">
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
