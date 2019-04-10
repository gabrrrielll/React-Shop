import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
  const [[subCat, idCat, idSub], updateSub] = useState([]);
  //console.log(window.location.href)
    var x =idCat;
    var y =idSub;
  return (
    <div id="main">
    <BrowserRouter>
      <cartContext.Provider value= { [ cart, updateCart ] } >
        <Header />
        <div id="full">
        <subCatContext.Provider value= { [[subCat, idCat, idSub], updateSub ] } >
          <Sidebar />
          <Route  path="/categorie/:x/subcategorie/:y"
                       component={ ()=> Content([x, y])  }
                        />
         {console.log(x)}
        </subCatContext.Provider>
        </div>
      </cartContext.Provider> 
      </BrowserRouter> 
    </div>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<Market />, rootElement);
