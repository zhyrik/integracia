import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Adress from '../common/contact/adress'

import Share from '../common/contact/share'
import { FooterWrap, P } from '../common/styled'

/**
 * functional react component for Footer component
 * @function
 * @returns {JSX.Element} - react component
 */
class Footer extends Component {

  render() {
    return (
      <FooterWrap className="bg-dark">
        <Container>
          <Row>
            <Col md="6">
              <P size="20px">Контакти:</P>
              <Adress />
            </Col>
            <Col md="6">
              <P size="20px">Поширити:</P>
              <Share />
            </Col>
          </Row>
        </Container>
      </FooterWrap>
    )
  }
}

export default Footer