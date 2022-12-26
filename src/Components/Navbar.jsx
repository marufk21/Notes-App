import React from 'react'
import { Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="pt-3 pr-4">
        <Navbar className="" fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center  whitespace-nowrap text-xl font-semibold dark:text-white">
              Navbar
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <NavLink className="text-lg" to="/">
              Home
            </NavLink>
            <NavLink className="text-lg" to="/about">
              About
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default NavBar
