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
              <h2>製作</h2>
              <br />
              <div>
                <p>製作: Dolly Chang、Otis Chen、皮寶(我家的貓)</p>
                <p>資料來源：藥局+衛生所即時庫存 geojson by kiang</p>
                <p>© Dolly&Otis All rights reserved.</p>{" "}
              </div>
              <ul>
                <li><a href="https://www.facebook.com/DollyLife/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com/dollyclife/" target="_blank" rel="noopener noreferrer">IG</a></li>
                <li><a href="https://medium.com/@changpeiwen" target="_blank" rel="noopener noreferrer">Medium</a></li>
              </ul>

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
