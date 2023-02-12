import React, { useEffect, useState } from "react";

type PropsTypes = {
  createBoxStyle: (value?: string) => any;
};

export default function Box({ createBoxStyle }: PropsTypes) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
}
