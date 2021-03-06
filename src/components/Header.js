import React from "react"
import Button from "../components/Button"

const Header = ({ name, onButtonClick }) => (
  <header className="header">
    <h1 className="header__title">Mountain kingdom</h1>
    <Button name={name} onClick={onButtonClick} />
  </header>
)

export default Header
