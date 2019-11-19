import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/Layouts/Layout'
import SEO from "../components/seo"
import WorkSimpleForm from '../components/Work/WorkSimpleForm'
import { H1White, H3White, Section } from '../components/common/styled'


/**
 * functional react component for ipoteka page
 * @function
 * @returns {JSX.Element} - react component
 */
function Ipoteka() {

  return (
    <Layout>
      <SEO
        title="Робота в Польщі, praca w Polsce"
        description="Ми пропонуємо найкращі вакансії в Польщі, Німеччині. Вакансії бесплатні.  робота на агенці і від прямих роботодавців. Praca w Polsce dla ukraincuw."
        lang="uk"
      />

      <Section>
        <Row>
          <Col>
            <H1White>Анкета працівника</H1White>
            <H3White>Заповніть цю анкету щоб почати пошук роботи. В полях телефон і емейл можна вказати інші засоби звязку (посилання на фейсбук або скайп)</H3White>
            <WorkSimpleForm />
          </Col>
        </Row>
      </Section>

    </Layout>
  )
}

export default Ipoteka