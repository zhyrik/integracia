import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, Section } from "../components/common/styled"
import Adress from '../components/common/contact/adress'

/**
 * functional react component for oreders page
 * @function
 * @returns {JSX.Element} - react component
 */
function AdressPage() {
  return (
    <Layout>
      <SEO
        title="контакти"
        description="Наші послуги: допомога з кредитами, іпотекою, пошук роботи, карти побиту, оренда і купівля квартир, домів, житла, мельдунок, реєстрація автомобіля"
        lang="uk"
      />

      <Section>
        <Row>
          <Col>
            <H1White>Наші контакти</H1White>
            <Adress />
          </Col>
        </Row>
      </Section>
      
    </Layout>
  )
}

export default AdressPage