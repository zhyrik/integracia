import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Header'

/**
 * functional react component for layout template
 * @function
 * @param {JSX.Element} children
 * @returns {JSX.Element} - react component
 */
function Layout({ children }) {
  return (
    <Container style={{ color: '#ccc' }}>
      <Header>header</Header>
      <main>{children}</main>
      <footer>footer</footer>
    </Container>
  )
}

export default Layout