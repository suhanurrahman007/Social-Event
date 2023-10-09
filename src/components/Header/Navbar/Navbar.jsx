import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
const Navbar = () => {
  const {user,logoutUsers} = useContext(AuthContext)

  const handleLogout = () =>{
    logoutUsers()
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error.message);
    })
  }

    const links = (
      <>
        <li id="sidebar" className="space-x-7">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li id="sidebar">
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li id="sidebar">
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Gallery
          </NavLink>
        </li>
        <li id="sidebar">
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Services
          </NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar px-5 md:px-16 lg:px-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn md:w-40  hover:bg-orange-900 bg-blue-900 text-white"
            >
              Log Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn md:w-40 bg-orange-900 hover:bg-blue-900 text-white"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;