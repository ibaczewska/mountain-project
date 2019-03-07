import React from "react"
import Link from "./Link"
const Footer = props => (
  <footer className="footer">
    <div className="footer__copyright">
      <span>&copy; 2019 mountain kingdom</span>
    </div>
    <div className="footer__links">
      <Link content="Cookies" className="footer__link" />
      <span>|</span>
      <Link content="Privacy" className="footer__link" />
    </div>
    <div className="footer__designer">
      Design by <span className="footer__designer__author">Wizard of Oz</span>
    </div>
  </footer>
)

export default Footer
