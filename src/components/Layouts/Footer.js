import React, { Component } from 'react'
import { FacebookProvider, Like, Comments, MessageUs } from 'react-facebook'
import styled from 'styled-components'

const Message = styled(MessageUs)`
  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 * functional react component for Footer component
 * @function
 * @returns {JSX.Element} - react component
 */
class Footer extends Component {

  render() {
    return (
      <footer>
        <FacebookProvider appId="473655019918357">
          <Message messengerAppId="473655019918357" pageId="113438570105835"/>
          <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
          <Comments href="https://www.facebook.com/Іпотека-кредити-Польща-113438570105835/" />
        </FacebookProvider>  
      </footer>
    )
  }
}

export default Footer