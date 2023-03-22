import React from 'react'
import PropTypes from 'prop-types'

const DateTimeDisplay = ({value, type,isDanger}) => {
  return (
    <div className={isDanger? "countdown danger": "countdown"}>
      <span>{value}</span>
      <p>{type}</p>
    </div>
  )
}

DateTimeDisplay.propTypes = {
value: PropTypes.number.isRequired,
type: PropTypes.string.isRequired,
isDanger:PropTypes.bool.isRequired,
}

export default DateTimeDisplay;
