import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function Fluid({ id }) {
  const data = useStaticQuery(graphql`
  query{
    contentfulAsset {
      fluid {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
  `)

  console.log(data)
  return (
    <Img fluid={data.contentfulAsset.fluid} />
  )
}

export default Fluid