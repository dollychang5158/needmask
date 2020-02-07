import React, { memo } from "react"
const DropDown = ({ placeHolder, current, values, onChange, sm }) => (
  <select
    value={current}
    className={"custom-select custom-select-lg"}
    // +(sm?"col-lg-4":"col-3")
    onChange={event => {
      onChange(event.target.value)
    }}
  >
    {placeHolder && <option value="" disabled hidden></option>}
    {values.map(value => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
)
export default memo(DropDown)
