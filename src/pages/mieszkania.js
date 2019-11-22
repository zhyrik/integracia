import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, H3White, Section } from "../components/common/styled"

/**
 * functional react component for apartaments page
 * @function
 * @returns {JSX.Element} - react component
 */
function Apartaments() {
  return (
    <Layout>
      <SEO
        title="Оренда і купівля житла, квартир Вроцлав"
        lang="uk"
        description="Оренда і продаж житла Вроцлав. Nieruchomosci, mieszkania, domy ma wynajem Wroclaw"
      />

      <Section>
        <Row>
          <Col>
            <H1White>Наші послуги</H1White>
            <H3White>докуменди</H3White>
          </Col>
        </Row>
      </Section>
      
    </Layout>
  )
}

export default Apartaments