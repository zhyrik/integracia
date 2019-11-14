import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FacebookProvider, MessageUs } from 'react-facebook'

/**
 * functional react component for Message component
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function Message() {
  return (
    <Row>
      <Col>
        <FacebookProvider appId="473655019918357">
          <MessageUs messengerAppId="473655019918357" pageId="113438570105835"/>
        </FacebookProvider>
      </Col>
    </Row>
  )
}

export default Message