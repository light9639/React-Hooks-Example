import React from "react";
import { PropsType } from "./Reducer2";

export default function Student({
  name,
  dispatch,
  id,
  isHere,
}: PropsType): JSX.Element {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "lightgray" : "black",
        }}
        onClick={() => {
          dispatch({ type: "mark-student", payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "delete-student", payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
}
