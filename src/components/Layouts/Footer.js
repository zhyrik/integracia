import React, { Component } from 'react'
import { FacebookProvider, Like, Comments, MessageUs } from 'react-facebook'

import Share from '../common/contact/share'
import { FooterWrap } from '../common/styled'

/**
 * functional react component for Footer component
 * @function
 * @returns {JSX.Element} - react component
 */
class Footer extends Component {

  render() {
    return (
      <FooterWrap className="bg-dark">
        <Share />
        <FacebookProvider appId="473655019918357">
          <Like href="https://www.facebook.com/Іпотека-кредити-Польща-113438570105835/" colorScheme="dark"/>
          <Comments href="https://www.facebook.com/Іпотека-кредити-Польща-113438570105835/" />
        </FacebookProvider>  
      </FooterWrap>
    )
  }
}

export default Footer