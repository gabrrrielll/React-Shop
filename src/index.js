import React from "react";
import ReactDOM from "react-dom";
import marketContext from "./marketContext";
import cartContext from "./cartContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

import "./styles.css";

function Market() {
  return (
    <div>
      <Header />
      <div id="full">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Market />, rootElement);
