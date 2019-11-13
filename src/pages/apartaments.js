import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, H3White } from "../components/common/styled"

/**
 * functional react component for apartaments page
 * @function
 * @returns {JSX.Element} - react component
 */
function Apartaments() {
  return (
    <Layout>
      <SEO
        title="Оренда і купівля житла, квартир, домів Вроцлав"
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

export default Apartaments