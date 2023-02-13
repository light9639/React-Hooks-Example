import React, { useCallback, useState } from "react";
import Box from "./Box";

export default function CallBack2(): JSX.Element {
  const [size, setSize] = useState<string | number>(100);
  const [isDark, setIsDark] = useState<boolean>(false);

  const createBoxStyle = useCallback(() => {
    return {
      textAlign: "center",
      backgroundColor: "blue",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  const Target = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
  };

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input type="number" value={size} onChange={Target} />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
