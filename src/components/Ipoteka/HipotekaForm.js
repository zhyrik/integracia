import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import { InputNumber, Label, InputGroup,InputBottom, InputButton, BigText } from '../common/styled'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function HipotekaForm({  }) {

  const [kredit, setKredit] = useState(200000)
  const [percent, setPercent] = useState(3.5)
  const [years, setYears] = useState(30)

  const [monthPayment, setMonthPayment] = useState(1138)

  const kalk = () => {
    const maxMoney = +kredit + (( kredit * percent * years ) / 100 )
    const monthMoney = parseInt(maxMoney / ( years * 12 ))
    console.log(kredit, maxMoney, monthMoney)
    setMonthPayment(monthMoney)
  }

  return (
    <form>
      <Row className="align-items-md-stretch justify-content-center">

        <Col md="4">
          <InputGroup>
            <Label>Сума кредиту</Label>
            <InputNumber
              type="number"
              value={kredit}
              onChange={e => setKredit(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="50000"
              max="2000000"
              value={kredit}
              step="10000"
              onChange={e => setKredit(e.target.value)}
            />
            <InputBottom>
              Впишіть суму яку хочете взяти в якості кредиту
            </InputBottom>
          </InputGroup>
        </Col>

        <Col md="4">
          <InputGroup>
            <Label>Ставка %</Label>
            <InputNumber
              type="number"
              value={percent}
              onChange={e => setPercent(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="2"
              max="10"
              value={percent}
              step="1"
              onChange={e => setPercent(e.target.value)}
            />
            <InputBottom>
              Впишіть ставку (в середньому 3.5%)
            </InputBottom>
          </InputGroup>
        </Col>

        <Col md="4">
          <InputGroup>
            <Label>Строк</Label>
            <InputNumber
              type="number"
              value={years}
              onChange={e => setYears(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="2"
              max="10"
              value={years}
              step="1"
              onChange={e => setYears(e.target.value)}
            />
            <InputBottom>
              Впишіть термін сплати (років)
            </InputBottom>
          </InputGroup>
        </Col>
        
        <Col md="4">
          <InputGroup >
            <InputButton variant="primary" type="button" onClick={kalk}>
              РОЗРАХУВАТИ
            </InputButton>
            <BigText>Місячний платіж <br/> {monthPayment} zl</BigText>
          </InputGroup >
        </Col>

      </Row>
      
    </form>
  )
}

export default HipotekaForm