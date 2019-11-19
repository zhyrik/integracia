import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { InputGroup} from '../styled'
/**
 * functional react component for Input wrapper with ROW compoennet
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function InputWrapperRow({ children }) {
  return (
    <Row className="align-items-center justify-content-center">
      <Col md="4">
        <InputGroup>
          {children}
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputWrapperRow
