import React, { useCallback, useEffect, useState } from "react";

export default function CallBack1(): JSX.Element {
  const [number, setNumber] = useState<number | string>(0);
  const [toggle, setToggle] = useState<boolean>(true);

  const someFunction = useCallback(() => {
    console.log(`someFunction: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("some Function 변경");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumber(e.target.value)
        }
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}
