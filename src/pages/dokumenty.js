import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, H3White, Section } from "../components/common/styled"

/**
 * functional react component for orders page
 * @function
 * @returns {JSX.Element} - react component
 */
function Orders() {
  return (
    <Layout>
      <SEO
        title="Карти побиту, мельдунек, реєстрація авто"
        description="Ми долпомагаємо реєструвави авто, виготовити карту побиту, кредити, іпотеку, купівля або оренда житла, консульємо і різних сферах"
        lang="uk"
      />

      <Section>
        <Row>
          <Col>
            <H1White>Наші послуги</H1White>
            <H3White>сторінка в розробці</H3White>
          </Col>
        </Row>
      </Section>
      
    </Layout>
  )
}

export default Orders