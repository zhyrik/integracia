import React from 'react'
import { FacebookProvider, Like } from 'react-facebook'
import { Row } from 'react-bootstrap'

import { H3White, Section, H2White, InputButton, Overlay, MessageUs } from "../styled"
import Share from './share'
/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function OverlayComponent({ text, money, close }) {
  return (
    <Overlay>
      <InputButton onClick={close}>
        ПОВЕРНУТИСЯ
      </InputButton>
      <H2White>{text} {money}zl</H2White>

      <H3White>
        Щоб отримати безкоштовну допомоку --> 
        <a href="#anketa" onClick={close} style={{ marginLeft: '25px'}}>
          <InputButton >
            ЗАПОВНІТЬ АНКЕТУ
          </InputButton>
        </a>
      </H3White>

      <Section>
      <H3White>
        Підтримайте нас в соцмережах
      </H3White>
      <Row>
        <FacebookProvider appId="473655019918357">
          <Like href="https://www.facebook.com/Іпотека-кредити-Польща-113438570105835/" colorScheme="dark"/>
          <MessageUs messengerAppId="473655019918357" pageId="113438570105835"/>
        </FacebookProvider>
      </Row>

      <Share />
      </Section>
    </Overlay>
  )
}

export default OverlayComponent