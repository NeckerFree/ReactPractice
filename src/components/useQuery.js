import { useEffect, useState } from 'react'

const useQuery = ({ url }) => {
  const [apiData, setApiData] = useState();
  const [httpCode, setHttpCode] = useState();
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(({ code, ...miData }) => {
        setHttpCode(code);
        setApiData(miData);
      });
  }, [url]);
  return ({ data: apiData, httpCode });
}

export default useQuery;
