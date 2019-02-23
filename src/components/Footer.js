import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__copyright">
          <span>&copy; 2019 mountain kingdom</span>
        </div>
        <div className="footer__links">
          <a href={"#"} className="footer__link">
            Cookies
          </a>
          <span>|</span>
          <a href={"#"} className="footer__link">
            Privacy
          </a>
        </div>
        <div className="footer__designer">
          Design by
          <span className="footer__designer__author">Wizard of Oz</span>
        </div>
      </footer>
    )
  }
}

export default Footer
