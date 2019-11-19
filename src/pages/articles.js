import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"
import { H1White, H3White, Section, H2White, P, IMG, ArticleCard, InputButton, ArticleCartext } from "../components/common/styled"
import { graphql, useStaticQuery, Link } from "gatsby"

/**
 * functional react component for articles page
 * @function
 * @returns {JSX.Element} - react component
 */
function Articles() {
  const data = useStaticQuery(graphql`
  {
    Articles: allContentfulArticle {
      edges {
        node {
          title
          url
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
    }
  }
  `)

  const articles = data.Articles.edges

  return (
    <Layout>
      <SEO
        title="Корисні статті і поради"
        description="Тут ви можете прочитати статті і поради про кредитовання, іпотеку в Польщі. А також інші поради."
        lang="uk"
      />

      <Section>
        <Row>
          <Col>
            <H1White>Кредитний порадник</H1White>
            <H3White>Тут ви можете прочитати статті і поради про кредитовання, іпотеку в Польщі. А також інші поради.</H3White>
          </Col>
        </Row>
      </Section>

      <Row>
        {articles.map(({ node }, index) => (
          <Col lg="4" sm="6" key={index}>
            <ArticleCard>
              <IMG src={node.image.fluid.src} alt={node.image.title}/>
              <ArticleCartext>
                <H2White>{node.title}</H2White>
                <P>{node.description.description.slice(0, 200)}...</P>
                <Link to={`/article/${node.url}`}>
                  <InputButton >
                    Детальніше
                  </InputButton>
                </Link>
              </ArticleCartext>
            </ArticleCard>
          </Col>
        ))}
      </Row>

    </Layout>
  )
}

export default Articles