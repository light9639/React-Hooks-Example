import React from "react";
import { Link } from "react-router-dom";
import styles from "./Style.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className={styles.Header}>
      <Link to="/useRef1">useRef1</Link>
      <Link to="/useRef2">useRef2</Link>
      <Link to="/Callback1">Callback1</Link>
      <Link to="/Callback2">Callback2</Link>
      <Link to="/Reducer1">Reducer1</Link>
      <Link to="/Reducer2">Reducer2</Link>
    </div>
  );
}
