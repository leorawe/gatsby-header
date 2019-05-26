import { Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'
import styled from '@emotion/styled'


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
        <div>{siteDesc}</div>
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

