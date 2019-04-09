import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./styles.css";

export const cartContext = React.createContext();
export const subCatContext = React.createContext();

const Market = () => {
  var cos = {
    numeProdus: "",
    imgProdus: "",
    pretProdus: 0,
    nrProduse: 0,
    pretTotal: 0
  }
  const [cart, updateCart] = useState(0);
  const [subCat, updateSub] = useState("Toate produsele");

  return (
    <div id="main">
      <cartContext.Provider value= { [ cart, updateCart ] } >
        
        <Header />
        <div id="full">
        <subCatContext.Provider value= { [ subCat, updateSub ] } >
          <Sidebar />
          <Content />
        </subCatContext.Provider>
        </div>
        
      </cartContext.Provider>  
    </div>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<Market />, rootElement);
