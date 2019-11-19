/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 * 
 * SAMPLE DATA OBJECT!!!
  [
    {
      "title": "some title",
      "description": "some desk"
    },
    {
      "title": "some title",
      "description": "some desk"
    }
  ]
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/article-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query Article {
      allContentfulArticle {
        edges {
          node {
            id
            url
          }
        }
      }
    }
    
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allContentfulArticle.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `article/${node.url}`,
        component: blogPostTemplate,
        context: {
          id: node.id
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}
