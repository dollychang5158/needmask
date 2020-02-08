import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="content">
        {modal ? (
          <>
            <Link className="close" to={closeTo}></Link>
            <div className="container">
              <div>Notice!</div>
            </div>
          </>
        ) : (
            <></>
          )}
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage
