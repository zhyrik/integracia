import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {
  EmailIcon,
  ViberIcon,
  FacebookIcon
} from 'react-share'

import { P, A } from '../styled'
/**
 * functional react component for adress commponent
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function Adress() {
  return (
    <address>
      <A href="mailto:integraciaukraincow@gmail.com" target="_blank">
        <Row className="justify-content-start">
          <Col xs="2"><EmailIcon size={32} round={true} /></Col>
          <Col>integraciaukraincow@gmail.com</Col>
        </Row>
      </A>
      <A href="https://www.facebook.com/%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B8-%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0-113438570105835" target="_blank">
        <Row className="justify-content-start">
          <Col xs="2"><FacebookIcon size={32} round={true} /></Col>
          <Col>facebook.com</Col>
        </Row>
      </A>
      <A href="viber://add?number=48662717018">
        <Row className="justify-content-start">
          <Col xs="2"><ViberIcon size={32} round={true} /></Col>
          <Col>48 662 717 018</Col>
        </Row>
      </A>
      <A href="viber://add?number=48662717018">
        <Row className="justify-content-start">
          <Col xs="2"><ViberIcon size={32} round={true} /></Col>
          <Col>48 662 717 018</Col>
        </Row>
      </A>
    </address>
  )
}

export default Adress