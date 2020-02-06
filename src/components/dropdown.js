import React, {memo} from 'react'
const DropDown = ({ current, values, onChange }) => (
  <select
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