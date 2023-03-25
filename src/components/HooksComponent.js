import React, { useEffect, useState } from 'react'

const HooksComponent = () => {
    const [change, setChange] = useState("Increment");
    const [counter, setCount] = useState(0);
    useEffect(() => {

        if (change === "Increment") {
            setCount((prev) => prev + 1);
        }
        else {
            setCount((prev) => prev - 1);
        }

    }, [change]);
    return (
        <div>
            <h1>count: {counter}</h1>
            <h1>change: {change}</h1>
            {/* <button onClick={() => setChange((change === "Increment") ? "Decrement" : "Increment")}>Change</button> */}
            <button onClick={() => setChange("Increment")}>Increment</button>
            <button onClick={() => setChange("Decrement")}>Decrement</button>
        </div>
    )
}

export default HooksComponent;
