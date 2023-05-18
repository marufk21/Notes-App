import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="bg-gray-800">
      <Navbar.Brand href=" ">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          Notes App
        </span>

        <NavLink
          to="/"
          activeClassName="text-teal-300"
          className="mr-4 ml-9 text-black"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="text-teal-300"
          className="mr-4 text-black"
        >
          About
        </NavLink>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/login" className="mr-2">
          <Button
            gradientMonochrome="teal"
            className="bg-teal-500 hover:bg-teal-600"
          >
            Login
          </Button>
        </Link>
        <Link to="/signup" className="mr-2">
          <Button
            gradientMonochrome="teal"
            className="bg-teal-500 hover:bg-teal-600"
          >
            SignUp
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default NavBar;
