import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="content">
        {modal ? (
          <>
            <Link to={closeTo}></Link>
            <div className="container">
              <h2>製作</h2>
              <br />
              <div>
              <p>製作: Dolly Chang、Otis Chen、皮寶(我家的貓)</p>
              <p>資料來源：藥局+衛生所即時庫存 geojson by kiang</p>
              <p>© Dolly&Otis All rights reserved.</p>{" "}
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
