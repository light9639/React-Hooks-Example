import reactLogo from "./assets/react.svg";
import "./App.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import RefMain from "@components/Ref1/RefMain";
import RefMain2 from "@components/Ref2/RefMain2";
import Callback1 from "@components/Callback1/Callback1";
import Callback2 from "@components/Callback2/Callback2";
import Reducer1 from "@components/Reducer1/Reducer1";
import Reducer2 from "@components/Reducer2/Reducer2";
import Header from "@components/Header/Header";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <a href="https://ko.reactjs.org/docs/hooks-intro.html" target="blank">
          <img src="https://images.emojiterra.com/twitter/v13.1/512px/1fa9d.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Hooks Example</h1>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/useRef1" element={<RefMain />} />
        <Route path="/useRef2" element={<RefMain2 />} />
        <Route path="/Callback1" element={<Callback1 />} />
        <Route path="/Callback2" element={<Callback2 />} />
        <Route path="/Reducer1" element={<Reducer1 />} />
        <Route path="/Reducer2" element={<Reducer2 />} />
      </Routes>
    </div>
  );
}
