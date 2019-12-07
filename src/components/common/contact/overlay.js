import React from 'react'
import { FacebookProvider, Like, MessageUs } from 'react-facebook'

import { H3White, Section, H2White, InputButton, Overlay } from "../styled"
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
        <div>Щоб отримати безкоштовну допомогу --> </div>
        <a href="#anketa" onClick={close}>
          <InputButton >
            ЗАПОВНІТЬ АНКЕТУ
          </InputButton>
        </a>
      </H3White>

      <Section>
      <H3White>
        Підтримайте нас в соцмережах
      </H3White>
      <div style={{ maxWidth: '100px'}}>
        <FacebookProvider appId="473655019918357">
          <Like href="https://www.facebook.com/Іпотека-кредити-Польща-113438570105835/" colorScheme="dark"/>
          <MessageUs messengerAppId="473655019918357" pageId="113438570105835"/>
        </FacebookProvider>
      </div>

      <Share />
      </Section>
    </Overlay>
  )
}

export default OverlayComponent