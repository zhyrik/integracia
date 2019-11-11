import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

//import { InputStyle, InputBottom, InputLabel, InputP } from '../common/formStyle'
import { InputNumber, Label, InputGroup,InputBottom, InputButton, BigText } from '../common/styled'
import './AbilityForm.css'
/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function AbilityForm() {
  // input data
  const [incom, setIncom] = useState(4000)
  const [family, setFamily] = useState(3)
  const [years, setYears] = useState(30)
  const [creditCart, setCreditCart] = useState(0)
  const [creditPayment, setCreditPayment] = useState(0)
  const [otherPayment, setOtherPayment] = useState(0)
  const [percent, setPercent] = useState(3.5)
  const [typeCredit, setTypeCredit] = useState()

  // calculate data
  const [maxCosts, setMaxCosts] = useState(1600)
  const [sumCosts, setSumCosts] = useState(576000)
  const [maxCredyt, setMaxCredyt] = useState(329142)

  const calculate = () => {
    const incomWithoutCosts = incom - 1200 - family * 400 - otherPayment - creditPayment - creditCart / 10
    let max65 = incom * 65 / 100 

    if (incomWithoutCosts < max65) {
      setMaxCosts(incomWithoutCosts)
    } else {
      setMaxCosts(max65)
    }
  }

  useEffect(() => {
    setSumCosts(maxCosts * 12 * years)
  }, [maxCosts])

  useEffect(() => {
    setMaxCredyt(parseInt(sumCosts / (100 + (percent - 1) * years) * 100))
  }, [sumCosts, percent, years])

  return (
    <form>
      <Row className="align-items-md-stretch">

        <Col md="4">
          <InputGroup>
            <Label>Дохід сімї (нетто)</Label>
            <InputNumber
              
              type="number"
              value={incom}
              onChange={e => setIncom(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="1000"
              max="20000"
              value={incom}
              step="100"
              onChange={e => setIncom(e.target.value)}
            />
            <InputBottom>
              Впишіть чистий, легальний дохід в місяць
            </InputBottom>
          </InputGroup>
        </Col>
        
        <Col md="4" className="align-self-sm-stretch">
          <InputGroup >
            <Label >Кількість осіб в сімї</Label>
            <InputNumber
              type="number"
              value={family}
              onChange={e => setFamily(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="1"
              max="10"
              value={family}
              step="1"
              onChange={e => setFamily(e.target.value)}
            />
            <InputBottom >
              Впишіть кількість членів сімї
            </InputBottom>
          </InputGroup >
        </Col>
        
        <Col md="4">
          <InputGroup >
            <Label >Термін сплати</Label>
            <InputNumber
              
              type="number"
              value={years}
              onChange={e => setYears(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="10"
              max="35"
              value={years}
              step="1"
              onChange={e => setYears(e.target.value)}
            />
            <InputBottom >
              Кількість років.
            </InputBottom>
          </InputGroup >
        </Col>
        
        <Col md="4">
          <InputGroup >
            <Label >Ліміт кредитних карточок</Label>
            <InputNumber
              
              type="number"
              value={creditCart}
              onChange={e => setCreditCart(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="0"
              max="20000"
              value={creditCart}
              step="100"
              onChange={e => setCreditCart(e.target.value)}
            />
            <InputBottom >
              Кредитні карточки краще закрити!
            </InputBottom>
          </InputGroup >
        </Col>
        
        <Col md="4">
          <InputGroup >
            <Label >Платежі по іншим кредитам</Label>
            <InputNumber
              
              type="number"
              value={creditPayment}
              onChange={e => setCreditPayment(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="0"
              max="2000"
              value={creditPayment}
              step="100"
              onChange={e => setCreditPayment(e.target.value)}
            />
            <InputBottom >
              Місячний платіж по іншим кредитам.
            </InputBottom>
          </InputGroup >
        </Col>
        
        <Col md="4">
          <InputGroup >
            <Label >Інші зобовязання</Label>
            <InputNumber
              
              type="number"
              value={otherPayment}
              onChange={e => setOtherPayment(e.target.value)}
            />
            <input
              type="range"
              className='range' 
              min="0"
              max="2000"
              value={otherPayment}
              step="100"
              onChange={e => setOtherPayment(e.target.value)}
            />
            <InputBottom >
              Впишіть місячний платіж по іншим зобовязанням (аліменти, штрафи, розсрочки, лізинг).
            </InputBottom>
          </InputGroup >
        </Col>

        <Col md="4">
          <InputGroup >
            <Label >процентна ставка %</Label>
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
              step="0.2"
              onChange={e => setPercent(e.target.value)}
            />
            <InputBottom >
              Процентна ставка банку 
            </InputBottom>
          </InputGroup >
        </Col>

        <Col  md="4">
          <InputGroup >
            <Label >тип сплати</Label>
            <InputNumber
              
              type="number"
              value={typeCredit}
              onChange={e => setTypeCredit(e.target.value)}
            />
            <InputBottom >
              В каркуляторі покищо працює тільки рівний тип сплати.
            </InputBottom>
          </InputGroup >
        </Col>
        
        <Col md="4">
          <InputGroup >
            <InputButton variant="primary" type="button" onClick={calculate}>
              РОЗРАХУВАТИ
            </InputButton>
            <BigText>максимальний кредит <br/> {maxCredyt} zl</BigText>
          </InputGroup >
        </Col>

      </Row>
      
    </form>
  )
}

export default AbilityForm