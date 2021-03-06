import React from "react"
import logo from "../assets/logo.png"
import Link from "./Link"

const Nav = props => (
  <nav className="nav" id="navDropdown">
    <Link content="About" className="nav__link" />
    <Link content="Offer" className="nav__link" />
    <img className="nav__logo" src={logo} alt="logo" />
    <Link content="Gallery" className="nav__link" />
    <Link content="Contact" className="nav__link" />
    <a className="nav__hamburger" id="dropdownClick" href="javascript:void(0)">&#9776;</a>
  </nav>
)

export default Nav
