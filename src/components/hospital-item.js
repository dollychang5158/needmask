import React, { memo } from "react"
const ListItem = ({ coordinates, properties }) => (
  <>
    <a
      className="item"
      href={
        coordinates && coordinates.length > 1
          ? "https://www.google.com/maps/?q=" +
            coordinates[1] +
            "," +
            coordinates[0] +
            ""
          : ""
      }
    >
      <div className="row">
        <div className="col col-md">
          <div className="col-sm font-weight-bold">{properties.name}</div>
          <div className="col-md">{properties.address}</div>
          <div className="col-md">{properties.phone}</div>
        </div>
        <div className="col-sm">{properties.mask_adult}</div>
        <div className="col-sm">{properties.mask_child}</div>
        <div
          className="col-sm"
          style={{ width: "30px", height: "30px", backgroundColor: "red" }}
        ></div>
      </div>
    </a>
    <br />
  </>
)

export default memo(ListItem)
