import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, H3White } from "../components/common/styled"

/**
 * functional react component for oreders page
 * @function
 * @returns {JSX.Element} - react component
 */
function Adress() {
  return (
    <Layout>
      <SEO
        title="Агенція Інтеграції. Ми допомагаєм адаптуватися українцям в Польщі"
        description="Наші послуги: допомога з кредитами, іпотекою, пошук роботи , вакансії, карти побиту, оренда і купівля квартир, домів, житла, мельдунок, реєстрація автомобіля"
        lang="uk"
      />

      <section>
        <Row>
          <Col>
            <H1White>Наші контакти</H1White>
            <H3White>телефон: </H3White>
            <H3White>емейл: </H3White>
          </Col>
        </Row>
      </section>
      
    </Layout>
  )
}

export default Adress