import { Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

const Header = ({ siteTitle, siteDesc, cover }) => (
  <header
    style={{
      marginBottom: `1.5rem`,
    }}
  >
  <div  style={{
      position: `relative`,
      height: `180px`
    }}>
   <Img fluid={cover} alt="Barbara's background" 
   /> 
     <div style={{
      position: `absolute`,
      backgroundColor: `#669933`,
      top:`50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      zIndex: `8`,
      content: ``,
      width: `410px`,
      height: `80px`,
      opacity: `.7`,
      borderRadius: `10px`,
     }} >
     </div>
   <div style={{
      position: `absolute`,
      color: `white`,
      top:`50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      textAlign: `center`,
      fontWeight: `800`,
      wordWrap: `noWrap`,
      zIndex: `99`,
      textShadow: `1px 1px 4px rgba(34,34,34,0.6)`,
    }}
    > <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `2rem`,
          }}
        >{siteTitle} 
        </Link>
        <div style={{
            fontSize: `1.25rem`,
          }}>{siteDesc}
          </div>
        </div>
      </div>
  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header

