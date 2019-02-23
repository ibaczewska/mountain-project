import React from "react"

const Button = ({ name, onClick }) => (
  <button href={"#"} className="button__item" onClick={() => onClick(name)}>
    {name}
  </button>
)

export default Button
