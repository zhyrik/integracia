import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, H3White } from "../components/common/styled"

/**
 * functional react component for orders page
 * @function
 * @returns {JSX.Element} - react component
 */
function Orders() {
  return (
    <Layout>
      <SEO
        title="Допомагаємо виготовляти карти побиту, мельдунек, реєстрація авто"
        description="Ми долпомагаємо реєструвави авто, виготовити карту побиту, кредити, іпотеку, купівля або оренда житла, консульємо і різних сферах"
        lang="uk"
      />

      <section>
        <Row>
          <Col>
            <H1White>Наші послуги</H1White>
            <H3White>докуменди</H3White>
          </Col>
        </Row>
      </section>
      
    </Layout>
  )
}

export default Orders