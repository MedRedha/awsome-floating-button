import React from "react";
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
  return (
    <div className="App-header">
      <FloatingButton right={true} top={true} height={80}>
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
      <FloatingButton right={false} top={true} height={80}>
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
      </FloatingButton>
      <FloatingButton right={false} top={false} height={80}>
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
      </FloatingButton>
      <FloatingButton right={true} top={false} height={80}>
        <Item
          Imgsrc={logo}
          onClick={() => {
            console.log("logo");
          }}
        />
      </FloatingButton>
    </div>
  );
}

export default App;
