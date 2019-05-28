import { Link} from "gatsby"
import React from "react"
import styled from 'styled-components'

import media from './mediaqueries'

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #333;
`
const Hamburger = styled.div`
  span {
    background: #333;
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
  }
  color: #fff;
  display: none;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
  ${media.phone`
    display: initial;
  `} 
`

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
  background-color: #333;
  ${media.phone`
    flex-direction: column;
    height: auto;
    display: none;
  `} 
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  font-size: 12px;
  z-index: 10;
  &:hover {
    color: #99cc66;
  }
`
const Menu = ({headerLinks}) => (
 <HeaderWrapper>
  {/* <Navbar /> */}
  <HeaderLink>
    <Hamburger onClick={() => alert('hi')}>Menu
   </Hamburger>
   </HeaderLink>
   <HeaderNav>
        {headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.link} key={`header-link-${i}`}>
              {headerLink.name}
            </HeaderLink>
            ))}      
    
  </HeaderNav>
  
</HeaderWrapper>
)

export default Menu

