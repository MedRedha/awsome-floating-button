import React, { useState, useEffect } from "react";
import "./App.css";
import FloatingButton from "./FloatingButton";
import { Item } from "./FloatingButton/styles";
import logo from "./assets/DOWNLOAD.svg";
import logo2 from "./assets/FORWARD 2.svg";
import logo3 from "./assets/GRID.svg";
import logo4 from "./assets/GIFT.svg";
import logo5 from "./assets/HOME.svg";
import logo6 from "./assets/MAP.svg";
import logo7 from "./assets/MAP PIN.svg";
import logo8 from "./assets/MUSIC.svg";

function App() {
  const [right, setRight] = useState(true);
  const [top, setTop] = useState(false);

  return (
    <div className="App-header">
      <FloatingButton right={right} top={top} height={80}>
        <Item
          Imgsrc={logo}
          onClick={() => {
            console.log("logo");
          }}
        />
        <Item
          Imgsrc={logo2}
          onClick={() => {
            console.log("logo2");
          }}
        />
        <Item
          Imgsrc={logo3}
          onClick={() => {
            console.log("logo3");
          }}
        />
        <Item
          Imgsrc={logo4}
          onClick={() => {
            console.log("logo4");
          }}
        />
        <Item
          Imgsrc={logo5}
          onClick={() => {
            console.log("logo5");
          }}
        />
        <Item
          Imgsrc={logo6}
          onClick={() => {
            console.log("logo6");
          }}
        />
        <Item
          Imgsrc={logo7}
          onClick={() => {
            console.log("logo7");
          }}
        />
        <Item
          Imgsrc={logo8}
          onClick={() => {
            console.log("logo8");
          }}
        />
      </FloatingButton>
      {/*<div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setNumber(number + 1);
            setExpanded(false);
          }}
          style={{
            height: "50px",
            width: "50px",
            fontSize: "32px",
            borderRadius: "10px",
            marginRight: "32px",
          }}
        >
          {" "}
          +{" "}
        </button>
        {number}
        <button
          onClick={() => {
            setNumber(number <= 2 ? number : number - 1);
            setExpanded(false);
          }}
          style={{
            height: "50px",
            width: "50px",
            fontSize: "32px",
            borderRadius: "10px",
            marginLeft: "32px",
          }}
        >
          {" "}
          -{" "}
        </button>
        <label>
          <input
            style={{
              height: "30px",
              width: "30px",
              fontSize: "32px",
              borderRadius: "10px",
              marginLeft: "32px",
            }}
            type="checkbox"
            data-toggle="toggle"
            checked={right}
            onChange={(e) => {
              setRight(e.target.checked);
              setExpanded(false);
            }}
          />
          Right
        </label>
        <label>
          <input
            style={{
              height: "30px",
              width: "30px",
              fontSize: "32px",
              borderRadius: "10px",
              marginLeft: "32px",
            }}
            type="checkbox"
            data-toggle="toggle"
            value={top}
            onChange={(e) => {
              setTop(e.target.checked);
              setExpanded(false);
            }}
          />
          Top
        </label>
      </div>
      */}
    </div>
  );
}

export default App;
