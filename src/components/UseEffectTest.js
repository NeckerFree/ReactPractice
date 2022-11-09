import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffectTest = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(count + 1);
      },2000);
  
      return () => {
        clearInterval(interval);
      };
    }, [count]);
  
    return <div>{count}</div>;
}

export default UseEffectTest;
