import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <>
            <Link to={closeTo}>Close</Link>
            <div className="container">
              <div>製作</div>
              <br />
              <div>製作 Dolly</div>
              <div>
                資料來源：藥局+衛生所即時庫存 geojson by kiang © Dolly&Otis All
                rights reserved.{" "}
              </div>
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
