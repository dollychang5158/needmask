import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import TitleImage from "../assets/header01.png"
// import DetectiveImage from "../assets/header02.png"
import Icon from "../assets/navLogoIcon.svg"
import More from "../assets/navMoreIcon.svg"

const Header = ({ siteTitle }) => (
  <>
    <nav className="navbar fixed-top navbar-light bg-white">
      <div className="narbar-content">
            <Icon />
            <Link
              to="/info/"
              state={{
                modal: true,
              }}
            >
              <More />
            </Link>
 
      </div>
    </nav>
    <div className="container keyview">
      <div className="kv-content" >
        <div className="title">
          <img src="/assets/header01.png"></img>
          {/* <TitleImage /> */}
          <h1>
            <span>你今天</span><br />
            <span className="sec-title">買到口罩了嗎？</span>
          </h1>
        </div>
        <div className="img-content" >
          <img src="/assets/header02.png"></img>
          {/* <DetectiveImage /> */}
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
