import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  }
  return (
    <div className="exercise">
        <h4>Exercise 2</h4>
       <p className="description">Toggle button text</p> 
      <button onClick={handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
      </div>
  )
}

export default ToggleButton;
