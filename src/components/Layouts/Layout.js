import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Header'
import Footer from './Footer'

/**
 * functional react component for layout template
 * @function
 * @param {JSX.Element} children
 * @returns {JSX.Element} - react component
 */
function Layout({ children }) {
  return (
    <>
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
    <Footer />
    </>
  )
}

export default Layout