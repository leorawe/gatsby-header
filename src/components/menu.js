import { Link} from "gatsby"
import React from "react"
import styled from '@emotion/styled'

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  display: flex;
  flex-direction: row;
  max-width: 800px;
  z-index: 1000;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  font-size: 12px;
  z-index: 10;
`
const Menu = ({headerLinks}) => (
 
   <HeaderNav>
        {headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.link} key={`header-link-${i}`}>
              {headerLink.name}
            </HeaderLink>
            ))}
        </HeaderNav>

)

export default Menu

