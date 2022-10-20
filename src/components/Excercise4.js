import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Exercise4() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    // const controller = new AbortController();
    // const { signal } = controller;
    console.log('El componente se ha montado');
    // fetch('https://jsonplaceholder.typdicode.com/posts/5', { signal })
   fetch("https://jsonplaceholder.typicode.com/posts/5")
      .then(res => res.json())
      .then(json => setMessage(json.body))
      .catch(error => {
        if (error.name === 'AbortError') {
          console.error(`Abort: ${error.name} ${error.message}`)
        }
        else {
          console.log(`Other: ${error.name} ${error.message}`);
        }
      });
    // return () => controller.abort()
    return () => {
      console.log('El componente se ha desmontado')
    }
  }, [])

  return (
    <Fragment>
      <Link to="/">back</Link>
      <h1>Ejemplo</h1>
      <div>{message}</div>
    </Fragment>)
}

export default Exercise4;