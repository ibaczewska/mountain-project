import React from "react"
import PropTypes from "prop-types"

const Input = ({ placeholder, name, className }) => (
  <input placeholder={placeholder} name={name} className={className} />
)
Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}

export default Input
