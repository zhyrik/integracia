import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { InputNumber, Label, InputGroup, GapSpan, H3White, InputButton, InputRadio } from '../common/styled'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function HipotekaRegisterForm() {
  /*
  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState(18)
  const [improve, setImpruve] = useState()
  const [family, setFamily] = useState(1)
  const [city, setCity] = useState()
  const [job, setJob] = useState()
  const [order, setOrder] = useState()

  const data = class {
    constructor () {
      this.name = name
      this.phone = phone
      this.email = email
      this.age = age
      this.improve = improve
      this.family = family
      this.city = city
      this.job = job
      this.order = order
    }
  }

  const sent = e => {
    e.preventDefault()
    if (phone || email) {
      console.log(new data())
    } else {
      alert('вкажіть контактні дані')
    }
  }
  */

  return (
    <form
      ction="https://formspree.io/xzbbrglw"
      method="POST"
    >
      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              імя:
              <GapSpan />
              <InputNumber
              type="text"
              
              /*onChange={e => setName(e.target.value)}*/
            />
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              телефон
              <GapSpan />
              <InputNumber
              type="number"
              name="phone"
              /*onChange={e => setPhone(e.target.value)}*/
            />
            </Label>
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              email
              <GapSpan />
              <InputNumber
              type="text"
              name="email"
              /*onChange={e => setEmail(e.target.value)}*/
            />
            </Label>
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              вік
              <GapSpan />
              <InputNumber
              type="number"
              name="age"
              /*onChange={e => setAge(e.target.value)}*/
            />
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              дохід
              <GapSpan />
              <InputNumber
              type="number"
              name="incom-zl"
              /*onChange={e => setImpruve(e.target.value)}*/
            />
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              к-сть членів сімї
              <GapSpan />
              <InputNumber
              type="number"
              name="family"
              /*onChange={e => setFamily(e.target.value)}*/
            />
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              місто
              <GapSpan />
              <InputNumber
              type="text"
              name="city"
              /*onChange={e => setCity(e.target.value)}*/
            />
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <H3White>Вид зайнятості</H3White>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setJob(e.target.value)}*/
                value="умова злеценя"
              />
              умова злеценя
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setJob(e.target.value)}*/
                value="умова о праце на час не окресльони"
              />
              умова о праце на час не окресльони
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setJob(e.target.value)}*/
                value="умова о праце на час окресльони"
              />
              умова о праце на час окресльони
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setJob(e.target.value)}*/
                value="умова о дзело"
              />
              умова о дзело
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setJob(e.target.value)}*/
                value="бізнес"
              />
              бізнес
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <H3White>Перебування на основі</H3White>
            <Label>
              <InputRadio
                type="radio"
                name="order"
                /*onChange={e => setOrder(e.target.value)}*/
                value="безвіз"
              />
              безвіз
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="order"
                /*onChange={e => setOrder(e.target.value)}*/
                value="віза"
              />
              віза
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setOrder(e.target.value)}*/
                value="часовий побут"
              />
              часовий побут
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setOrder(e.target.value)}*/
                value="сталий побут"
              />
              сталий побут
            </Label>
            <Label>
              <InputRadio
                type="radio"
                name="work"
                /*onChange={e => setOrder(e.target.value)}*/
                value="громадянство ЄС"
              />
              громадянство ЄС
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <InputButton type="submit" value="Send">Відправити</InputButton>
          </InputGroup>
        </Col>
      </Row>

    </form>
  )
}

export default HipotekaRegisterForm