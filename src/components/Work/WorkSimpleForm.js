import React from 'react'

import { InputNumber, Label, GapSpan, InputButton, Textarea, InputRadio } from '../common/styled'
import InputWrapperRow from '../common/Inputs/InputWrapperRow'
/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function WorkSimpleForm() {
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
            name="name"
          />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
         вік:
          <GapSpan />
          <InputNumber
          type="number"
          name="age"
        />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          стать:
          <InputRadio
            type="radio"
            value="чоловік"
            name="gender"
          />
          чоловік
        
          <InputRadio
            type="radio"
            value="жінка"
            name="gender"
          />
          жінка
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          мови:
          <GapSpan />
          <InputNumber
          type="text"
          name="language "
          placeholder="польська/середній німецька/початковий"
        />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          досвід:
          <GapSpan />
          <Textarea
            rows="5"
            placeholder="коротко опишіть досвід наприклад: (столяр досвід 5 років є досвід виготовлення мяких меблів і корпусних меблів на замовлення, маляр-штукатур 1 рік досвіду)"
            name="expireence "
          />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          бажана <br /> робота:
          <GapSpan />
          <Textarea
            rows="5"
            placeholder="коротко опишіть бажані позиції роботи наприклад (таксист, курєр, робочий на завод)"
            name="aply for"
          />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          вади:
          <GapSpan />
          <Textarea
            rows="5"
            placeholder="коротко опишіть фізичні вади якщо такі є (слабкий зір, грижі, інвалідність, інше)"
            name="health"
          />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          місто:
          <GapSpan />
          <Textarea
            rows="3"
            placeholder="Поблизу якого міста  Ви хотіли б працювати? Залиште це поле пустим якщо локалізація немає значення."
            name="city"
          />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          чи маєте водійські права?
          <InputRadio
            type="radio"
            value="yes"
            name="car_id"
          />
          так
        
          <InputRadio
            type="radio"
            value="no"
            name="car_id"
          />
          ні
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          чи маєте діючу візу?
          <InputRadio
            type="radio"
            value="yes"
            name="viza"
          />
          так
        
          <InputRadio
            type="radio"
            value="no"
            name="viza"
          />
          ні
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          телефон
          <GapSpan />
          <InputNumber
          type="number"
          name="phone"
        />
        </Label>
      </InputWrapperRow>

      <InputWrapperRow>
        <Label>
          email:
          <GapSpan />
          <InputNumber
          type="text"
          name="email"
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

export default WorkSimpleForm