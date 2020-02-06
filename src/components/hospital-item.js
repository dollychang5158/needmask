import React, { memo } from "react"
const ListItem = ({ coordinates, properties }) => (
  <>
    <a
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
      <div>{properties.name}</div>
      <div>{properties.address}</div>
      <div>{properties.mask_adult}</div>
      <div>{properties.mask_child}</div>
      <div
        style={{ width: "30px", height: "30px", backgroundColor: "red" }}
      ></div>
    </a>
    <br />
  </>
)

export default memo(ListItem)
