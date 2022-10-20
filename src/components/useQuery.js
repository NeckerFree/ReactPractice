import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
const useQuery = ({ url }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(({ code, status, ...miData }) => {
        if (code > 400) {
          navigate(location.pathname, { state: { errorStatusCode: code } });
        } else {
          setApiData(miData);
        }
      });
  }, [url]);
  return { data: apiData };
}

export default useQuery;
