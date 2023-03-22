import React from 'react'
import PropTypes from 'prop-types'
import DateTimeDisplay from './DateTimeDisplay'

const ShowCounter = ({days,hours,minutes,seconds}) => {
  return (
    <div className="show-counter">
        <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      ></a>
      <DateTimeDisplay value={days} type={'Days'} isDanger={days<=3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={'Minutes'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  )
}

ShowCounter.propTypes = {
    days:PropTypes.number.isRequired,
    hours:PropTypes.number.isRequired,
    minutes:PropTypes.number.isRequired,
    seconds:PropTypes.number.isRequired,
}

export default ShowCounter
