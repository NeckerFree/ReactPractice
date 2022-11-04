import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Counter from './Counter';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: 'red' }}>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>

	);
};

const ErrorCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => setCount(0)}
		>
			<Counter count={count} setCount={setCount} />
		</ErrorBoundary>
	)
}

export default ErrorCounter;
