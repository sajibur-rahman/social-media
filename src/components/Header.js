import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:flex items-center justify-between h-16 bg-blue-600">
      <div className="text-white font-semibold text-2xl ml-5">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
        >
          facebook
        </NavLink>
      </div>
      <ul>
        <NavLink
          className="text-xl text-white mr-5  "
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="text-xl text-white mr-5 "
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          to="/posts"
        >
          posts
        </NavLink>
        <NavLink
          className="text-xl text-white mr-5  "
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          to="/comments"
        >
          comments
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
