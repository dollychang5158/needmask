import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DetectiveImage from "../assets/header02.svg"
import Icon from "../assets/navLogoIcon.svg"
import More from "../assets/navMoreIcon.svg"

const Header = ({ siteTitle }) => (
  <>
    <nav className="navbar fixed-top navbar-light bg-white">
      <a className="left top">
        <div className="row">
          <Icon />
          <More />
        </div>
      </a>
    </nav>
    <div className="container">
      <div className="row">
        <div className="slogan">你今天 買到口罩了嗎？</div>
        <div>
          <DetectiveImage />
        </div>
      </div>
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
