import React, { useState, useRef } from "react";

export default function Ref1(): JSX.Element {
    const [count, setCount] = useState<number>(0);
    const countRef = useRef<number>(0);

    console.log("렌더링!");

    const increaseCountState = () => {
        setCount(count + 1);
    };
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref: ", countRef.current);
    };

    return (
        <React.Fragment>
            <p>State: {count} </p>
            <p>Ref: {countRef.current} </p>
            <button onClick={increaseCountState}>State Up</button>
            <button onClick={increaseCountRef}>Ref Up</button>
        </React.Fragment>
    );
}
