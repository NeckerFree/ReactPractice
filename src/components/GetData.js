import React, { useEffect, useState } from 'react';

const GetData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default GetData;
