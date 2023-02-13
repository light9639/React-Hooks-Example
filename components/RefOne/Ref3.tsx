import React, { useState, useRef, useEffect } from "react";
import { render } from "react-dom";

export default function Ref3(): JSX.Element {
    const [count, setCount] = useState<number>(1);
    const renderCount = useRef<number>(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log("render: ", renderCount.current);
    });

    return (
        <React.Fragment>
            <p>Count: {count} </p>
            <button onClick={() => setCount(count + 1)}>Up</button>
        </React.Fragment>
    );
}
