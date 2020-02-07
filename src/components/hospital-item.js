import React, { memo } from "react"
import MapIcon from "../assets/mapIcon.svg"

const ListItem = ({ coordinates, properties }) => (
  <>
    <a
      className="item"
      href={
        coordinates && coordinates.length > 1
          ? "https://www.google.com/maps/?q="+properties.name+"&query" +
          coordinates[1] +
          "," +
          coordinates[0] +
          ""
          : ""
      }
      target="_blank"
    >
      <div className="row item-content">
        <div className="col col-lg-5 col-12">
          <h3 className="col-sm font-weight-bold title">{properties.name}</h3>
          <p className="desc">{properties.address}</p>
          <p className="desc">{properties.phone}</p>
        </div>
        <div className="container detail col-lg-7 col-12">
          <div className="col-lg-5 col-5 number adult"><p><span>成人</span>{properties.mask_adult}</p></div>
          <div className="col-lg-5 col-5 number child"><p><span>兒童</span>{properties.mask_child}</p></div>
          <div className="col-lg-2 col-2 map"><MapIcon/></div>
        </div>
        <div className="container time hide">
          <p className="col title">營業時間:</p>
          <p className="col desc">週一～週日：9:00~18:00{properties.time}</p>
        </div>
      </div>
    </a>
    <span className="item-bottom-space" />
  </>
)

export default memo(ListItem)
