import React from 'react';
const Counter = ({ count, setCount }) => {
	if (count === 5) {
		throw new Error('Generated error');
	}
	
	return (
		<>
			<div>{`Count: ${count}`}</div>
			<button onClick={() => setCount(count + 1)}>Increment count</button>
			<button onClick={() => setCount(count - 1)}>Decrement count</button>
		</>
	)
}

export default Counter;
