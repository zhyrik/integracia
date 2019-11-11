import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import { InputNumber, Label, InputGroup, GapSpan, H3White, InputButton } from '../common/styled'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function HipotekaRegisterForm({  }) {
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

  return (
    <form>
      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <Label>
              імя:
              <GapSpan />
              <InputNumber
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
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
              onChange={e => setPhone(e.target.value)}
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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setAge(e.target.value)}
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
              onChange={e => setImpruve(e.target.value)}
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
              onChange={e => setFamily(e.target.value)}
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
              onChange={e => setCity(e.target.value)}
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
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setJob(e.target.value)}
                value="умова злеценя"
              />
              <GapSpan />
              умова злеценя
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setJob(e.target.value)}
                value="умова о праце на час не окресльони"
              />
              <GapSpan />
              умова о праце на час не окресльони
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setJob(e.target.value)}
                value="умова о праце на час окресльони"
              />
              <GapSpan />
              умова о праце на час окресльони
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setJob(e.target.value)}
                value="умова о дзело"
              />
              <GapSpan />
              умова о дзело
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setJob(e.target.value)}
                value="бізнес"
              />
              <GapSpan />
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
              <InputNumber
                type="radio"
                name="order"
                onChange={e => setOrder(e.target.value)}
                value="безвіз"
              />
              <GapSpan />
              безвіз
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="order"
                onChange={e => setOrder(e.target.value)}
                value="віза"
              />
              <GapSpan />
              віза
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setOrder(e.target.value)}
                value="часовий побут"
              />
              <GapSpan />
              часовий побут
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setOrder(e.target.value)}
                value="сталий побут"
              />
              <GapSpan />
              сталий побут
            </Label>
            <Label>
              <InputNumber
                type="radio"
                name="work"
                onChange={e => setOrder(e.target.value)}
                value="громадянство ЄС"
              />
              <GapSpan />
              громадянство ЄС
            </Label>
          </InputGroup>
        </Col>
      </Row>

      <Row className="align-items-center justify-content-center">
        <Col md="4">
          <InputGroup>
            <InputButton onClick={e => sent(e)}>Відправити</InputButton>
          </InputGroup>
        </Col>
      </Row>

    </form>
  )
}

export default HipotekaRegisterForm