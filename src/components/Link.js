import React from "react"
import PropTypes from "prop-types"

const Link = ({ content, className }) => (
  <a href={"#"} className={className} href="javascript:void(0)">
    {content}
  </a>
)

Link.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

Link.defaultProps = {
  content: "Link",
}
export default Link
