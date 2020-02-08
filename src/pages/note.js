import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div className="content note-container">
        {modal ? (
          <>
            <Link className="close" to={closeTo}></Link>
            <div className="container">
              <h2>最新資訊更新</h2>
              <br />
              <div>
                <p>1.部分藥局因採發放號碼牌方式，方便民眾購買口罩，系統目前無法顯示已發送號碼牌數量。</p>
                <p>2.口罩數量以藥局實際存量為主，<span>線上查詢之數量僅供參考。</span></p>
                <p>3.若您的藥局有需要加註的公告事項，可以填寫表單：<a href="https://pse.is/KH7DC" target="_blank">https://pse.is/KH7DC</a></p>{" "}
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
