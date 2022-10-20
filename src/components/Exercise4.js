import { get } from 'lodash';
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Page404 from './Page404';
import useQuery from './useQuery';

function Exercise4() {
  const { data, httpCode } = useQuery({
    url: 'https://jsonplaceholder.typicode.com/posts/5'
  });
  if (httpCode === 404) {
    return <Page404 />
  };
  const message = get(data, "body");

  return (
    <Fragment>
      <Link to="/">back</Link>
      <h1>Ejemplo</h1>
      <div>{message}</div>
    </Fragment>)
}

export default Exercise4;