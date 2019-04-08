import React from "react";
import ReactDOM from "react-dom";
import marketContext from "./marketContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./styles.css";

class Market extends React.Component  {
  static contextType = marketContext;

  render(){

  return (
    <div id="main">
      <Header />
      <div id="full">
        <Sidebar />
        <Content date={this.context} />
      </div>
    </div>
  );

  }
 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Market />, rootElement);
