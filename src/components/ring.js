import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const RingImg = () => {
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "ring.png" }) {
        childImageSharp {
          fixed(width: 76) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.Image.childImageSharp.fixed} />
}
const Ring = () => {
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
      <div>
        <RingImg />
        <div>{isRead ? "" : "3"}</div>
      </div>
    </Link>
  )
}
export default Ring
