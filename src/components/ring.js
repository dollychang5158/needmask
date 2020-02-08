import React, { useState } from "react"
import { Link } from "gatsby"
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
      {isRead ? <div></div>: <div>3</div>}
    </Link>
  )
}
export default Ring
