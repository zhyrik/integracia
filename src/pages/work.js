import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from '../components/Layouts/Layout'
import WorkSimpleForm from '../components/Work/WorkSimpleForm'
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
          <H1White>Анкета працівника</H1White>
          <H3White>Заповніть цю анкету щоб почати пошук роботи. В полях телефон і емейл можна вказати інші засоби звязку (посилання на фейсбук або скайп)</H3White>
          <WorkSimpleForm />
        </Col>
      </Row>

    </Layout>
  )
}

export default Ipoteka