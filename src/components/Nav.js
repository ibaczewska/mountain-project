import React from "react"
import logo from "../assets/logo.png"

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <a href={"#"} className="nav__link">
          About
        </a>
        <a href={"#"} className="nav__link">
          Offer
        </a>
        <img className="nav__logo" src={logo} alt="logo" />
        <a href={"#"} className="nav__link">
          Gallery
        </a>
        <a href={"#"} className="nav__link">
          Contact
        </a>
      </nav>
    )
  }
}

export default Nav
