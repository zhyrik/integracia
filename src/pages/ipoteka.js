import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/Layouts/Layout'
import AbilityForm from '../components/Ipoteka/AbilityForm'
import HipotekaForm from '../components/Ipoteka/HipotekaForm'
import HipotekaRegisterForm from '../components/Ipoteka/HipotekaRegisterForm'
import { H1White, H3White } from '../components/common/styled'


/**
 * functional react component for ipoteka page
 * @function
 * @returns {JSX.Element} - react component
 */
function Ipoteka() {

  return (
    <Layout>

      <Row>
        <Col>
          <H1White>Каркулятор оцінки Кредитоспроможності</H1White>
          <H3White>Калькулятор кредитоспроможності (скоринг): розрахувати максимальну можливу суму іпотечного кредиту</H3White>
          <AbilityForm />
        </Col>
      </Row>

      <Row>
        <Col>
          <H1White>КРЕДИТНИЙ КАЛЬКУЛЯТОР - ІПОТЕЧНИЙ КРЕДИТ</H1White>
          <H3White>Калькулятор іпотеки онлайн дозволяє: розрахувати ефективну ставку за кредитом на купівлю квартири або житла, довідатися розмір щомісячного платежу за іпотечним кредитом</H3White>
          <HipotekaForm />
        </Col>
      </Row>

      <Row>
        <Col>
          <H1White>Анкета</H1White>
          <H3White>Заповніть анкету і отримайте БЕЗКОШТОВНУ допомогу або консультації для отримання кредиту</H3White>
          <HipotekaRegisterForm />
        </Col>
      </Row>

    </Layout>
  )
}

export default Ipoteka