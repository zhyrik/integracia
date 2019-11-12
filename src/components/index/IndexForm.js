import React from 'react'

import { InputNumber, Label, GapSpan, Textarea, InputButton } from '../common/styled'
import InputWrapperRow from '../common/Inputs/InputWrapperRow'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function IndexForm() {

  return (
    <form
      action="https://formspree.io/xzbbrglw"
      method="POST"
    >
      <InputWrapperRow>
        <Label>
          імя:
          <GapSpan />
            <InputNumber
              type="text"
              name="name "
            />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          телефон:
          <GapSpan />
            <InputNumber
              type="text"
              name="phone"
            />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          емейл:
          <GapSpan />
            <InputNumber
              type="text"
              name="email"
            />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          <Textarea
            rows="5"
            placeholder="Запитання, повідомлення..."
            name="text"
          />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <InputButton variant="primary" type="submit" value="Send">
          Відправити
        </InputButton>
      </InputWrapperRow>
    </form>
  )
} 

export default IndexForm