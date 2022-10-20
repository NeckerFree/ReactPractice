import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ToggleButton = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  }
  return (
    <div className="exercise">
      <h4>Exercise 2</h4>
      <p className="description">Toggle button text</p>
      <div>
        <Link to="/">back</Link>
      </div>
      <button onClick={handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default ToggleButton;
