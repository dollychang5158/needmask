import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Ring = () => {
  const data = useStaticQuery(graphql`
    query {
      ringRead: file(relativePath: { eq: "ring-read.png" }) {
        childImageSharp {
          fluid(maxWidth: 76) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      ring: file(relativePath: { eq: "ring.png" }) {
        childImageSharp {
          fluid(maxWidth: 76) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const RingImg = () => {
    return <Img fluid={data.ring.childImageSharp.fluid} />
  }

  const RingReadImg = () => {
    return <Img fluid={data.ringRead.childImageSharp.fluid} />
  }
  const [isRead, setRead] = useState(false)
  const handleClick = () => setRead(true)
  return (
    <Link
      onClick={handleClick}
      to="/note/"
      state={{
        modal: true,
      }}
    >


      {isRead ? <><RingReadImg /></> : <><RingImg /><div className="number">3</div></>}
    </Link>
  )
}
export default Ring
