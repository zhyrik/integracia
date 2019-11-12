import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: #ccc;
  text-decoration: none!important;
  text-transform: capitalize;
  padding: 5px 15px;
  transition: all 0.3s;
  &:hover{
    color: white;
  }
`

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home" style={{color: '#fff'}}>Агенція інтеграції</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end'}}>
          <Nav className="">
            <StyledLink to="/">home</StyledLink>
            <StyledLink to="/ipoteka/">кредити</StyledLink>
            <StyledLink to="/work/">робота</StyledLink>
            <StyledLink to="/apartaments/">житло</StyledLink>
            <StyledLink to="/orders/">документи</StyledLink>
            <StyledLink to="/adress/">контакти</StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header