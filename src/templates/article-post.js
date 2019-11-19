import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { graphql } from "gatsby"
import { FacebookProvider, Like, Comments } from 'react-facebook'

import Layout from '../components/Layouts/Layout'
import SEO from "../components/seo"
import { H1White, H3White, H2White, Section, P, IMG } from '../components/common/styled'


/**
 * functional react component for ArticlePost component
 * @function
 * @returns {JSX.Element} - react component
 */
function ArticlePost({ data }) {

  const { title, image } = data.contentfulArticle
  const { description } = data.contentfulArticle.description
  const array = data.contentfulArticle.data

  console.log(data)

  return (
    <Layout>
      <SEO
        title={title.slice(0, 55)}
        description={description.slice(0, 255)}
        lang="uk"
      />

      <Section>
        <H1White>{title}</H1White>
        <H3White size="18px">{description}</H3White>
        <IMG src={image.fluid.src} alt={image.title} />
      </Section>

      {array && <div>
        {array.map((arr, index) => (
          <Section padding="0" key={index}>
            <H2White>{arr.title}</H2White>
            <P size="16px">{arr.description}</P>
          </Section>
        ))}
        </div>
      }

      <Section>
        <Row className="justify-content-center">
          <Col md="6">
            <P size="20xp">Коментувати:</P>
            <FacebookProvider appId="473655019918357">
              <Like href="https://www.facebook.com/Іпотека-кредити-Польща-113438570105835/" colorScheme="dark"/>
              <Comments href="https://www.facebook.com/Іпотека-кредити-Польща-113438570105835/" />
            </FacebookProvider>
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    contentfulArticle(id: {eq: $id}) {
      title
      data {
        title
        description
      }
      description {
        description
      }
      image {
        fluid {
          src
        }
        title
      }
    }
  }
`
export default ArticlePost