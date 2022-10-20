import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div>
      <Link to="/">Back</Link>
      <p>404: API URL not found!</p>
    </div>
  )
}

export default Page404;
