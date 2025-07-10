import { Link, NavLink } from "react-router";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold underline" : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold underline" : "text-white"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create-book"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold underline" : "text-white"
          }
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrow-summary"
          className={({ isActive }) =>
            isActive ? "text-white font-semibold underline" : "text-white"
          }
        >
          Borrow Summary
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-gradient-to-r from-indigo-800 to-blue-500 sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-800">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-white font-bold  hover:bg-white hover:text-indigo-600 transition duration-200">NexLib</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{menuItems}</ul>
      </div>

      <div className="navbar-end">
        <Link to="/create-book" className="btn btn-outline text-white border-white hover:bg-white hover:text-indigo-600 transition duration-200 btn-sm hidden md:inline-block">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
