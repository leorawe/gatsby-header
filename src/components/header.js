import { Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'


const Header = ({ siteTitle, cover }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
  <div  style={{
      position: `relative`,
      height: `120px`
    }}>
   <Img fluid={cover} alt="Barbara's background" 
   /> 
   <h1 style={{
      position: `absolute`,
      color: `white`,
      top:`50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      textAlign: `center`,
      wordWrap: `noWrap`,
      textShadow: `-1px -1px 0 #202020, 1px -1px 0 #202020, -1px 1px 0 #202020, 1px 1px 0 #202020`
  
    }}
    > <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >{siteTitle}
        </Link>
        </h1>
   </div>
    testing 123
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

