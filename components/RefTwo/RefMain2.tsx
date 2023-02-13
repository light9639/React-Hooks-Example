import React, { useEffect, useRef } from "react";

export default function RefMain2(): JSX.Element {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`Welcome. ${inputRef.current?.value}!`);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <React.Fragment>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>Login</button>
    </React.Fragment>
  );
}
