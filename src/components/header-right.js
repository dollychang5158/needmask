import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export default () => {
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "header02.png" }) {
        childImageSharp {
          fluid(maxWidth: 433) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <Img
        fluid={data.Image.childImageSharp.fluid}
      />
  )
}