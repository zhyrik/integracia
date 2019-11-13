import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/Layouts/Layout'
import SEO from "../components/seo"
import AbilityForm from '../components/Ipoteka/AbilityForm'
import HipotekaForm from '../components/Ipoteka/HipotekaForm'
import HipotekaRegisterForm from '../components/Ipoteka/HipotekaRegisterForm'
import { H1White, H3White, H2White } from '../components/common/styled'


/**
 * functional react component for ipoteka page
 * @function
 * @returns {JSX.Element} - react component
 */
function Ipoteka() {

  return (
    <Layout>
      <SEO
        title="Каркулятори кредитоспроможності, іпотечний"
        description="За допомогою наших каркуляторів виможете визначити кредитоспроможність, розрахувати місячну ставку кредиту, kalkulator zdolności kredytowej"
        lang="uk"
      />

      <section>
        <Row>
          <Col>
            <H1White>Каркулятор оцінки Кредитоспроможності</H1White>
            <H3White>Калькулятор кредитоспроможності (скоринг): розрахувати максимальну можливу суму іпотечного кредиту</H3White>
            <AbilityForm />
          </Col>
        </Row>
      </section>

      <section>
        <Row>
          <Col>
            <H2White>КРЕДИТНИЙ КАЛЬКУЛЯТОР - ІПОТЕЧНИЙ КРЕДИТ</H2White>
            <H3White>Калькулятор іпотеки онлайн дозволяє: розрахувати ефективну ставку за кредитом на купівлю квартири або житла, довідатися розмір щомісячного платежу за іпотечним кредитом</H3White>
            <HipotekaForm />
          </Col>
        </Row>
      </section>

      <section>
        <Row>
          <Col>
            <H2White>Анкета</H2White>
            <H3White>Заповніть анкету і отримайте БЕЗКОШТОВНУ допомогу або консультації для отримання кредиту</H3White>
            <HipotekaRegisterForm />
          </Col>
        </Row>
      </section>

    </Layout>
  )
}

export default Ipoteka