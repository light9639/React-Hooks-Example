import React, { useState, useRef } from "react";

export default function Ref2(): JSX.Element {
    const [renderer, setRenderer] = useState<number>(0);
    const countRef = useRef<number>(0);
    let countVar = 0;

    const doRendering = () => {
        setRenderer(renderer + 1);
    };

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref ", countRef.current);
    };

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log("var ", countVar);
    };

    const printResults = () => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
    };

    return (
        <React.Fragment>
            <p>Ref: {countRef.current} </p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>Render </button>
            <button onClick={increaseRef}>Ref Up</button>
            <button onClick={increaseVar}>Var Up</button>
            <button onClick={printResults}>Result</button>
            <p>
                {" "}
                var는 렌더링시 0인 이유: 함수는 재렌더링시 초기화 되기 때문. ref
                <br />
                컴포넌트가 렌더링되어도 값이 유지 (생명주기에 따라 계속 유지되며
                <br />
                언마운트까지 이어진다.){" "}
            </p>
        </React.Fragment>
    );
}
