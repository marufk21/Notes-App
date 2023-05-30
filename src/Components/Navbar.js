import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar className="bg-gray-800">
      <Navbar.Brand>
        <Link to="/">
          <span className="self-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-black">
            Quick Notes
          </span>
        </Link>
      </Navbar.Brand>
      {!localStorage.getItem("token") ? (
        <div className="flex md:order-2">
          <Link to="/login" className="mr-0.5">
            <Button
              gradientMonochrome="green"
              className="text-white rounded-3xl font-semibold bg-green-700 hover:bg-green-800"
            >
              Log In
            </Button>
          </Link>
          <Link to="/signup" className="">
            <Button
              gradientMonochrome="blue"
              className="text-white rounded-3xl font-semibold bg-pink-500 hover:bg-pink-600"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      ) : (
        <Link to="/login" className="mr-2">
          <Button
            onClick={handleLogout}
            gradientMonochrome="red"
            className="text-white rounded-3xl font-semibold bg-red-600 hover:bg-red-700"
          >
            Logout
          </Button>
        </Link>
      )}
    </Navbar>
  );
};

export default NavBar;
