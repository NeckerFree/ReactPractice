import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <p>General page not found!</p>
    </div>
  )
}

export default NotFound;
