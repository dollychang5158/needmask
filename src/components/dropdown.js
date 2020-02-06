import React, {memo} from 'react'
const DropDown = ({ current, values, onChange }) => (
  <select
    className="custom-select custom-select-lg col-lg-4 col-5"
    onChange={event => {
      onChange(event.target.value)
    }}
  >
    {values.map(value => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
)
export default memo(DropDown)