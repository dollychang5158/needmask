import React from "react"
import YellowBox from "./yellow-box"

export default () => (
  <div className="row">
    <div className="row col-sm">
      <YellowBox /> <div className="">醫事機構資訊</div>
    </div>
    <div className="row col-sm">
      <YellowBox /> <div className="">成人口罩剩餘數量</div>
    </div>
    <div className="row col-sm">
      <YellowBox /> <div className="">兒童口罩剩餘數量</div>
    </div>
    <div className="row col-sm">
      <YellowBox /> <div className="">地圖</div>
    </div>
  </div>
)
