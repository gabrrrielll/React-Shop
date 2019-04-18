import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
  const [cart, updateCart] = useState([]);
  const [[subCat, idCat, idSub], updateSub] = useState([]);
  
    var x = window.location.pathname.slice(11,12);
    //=idCat;
    var y =window.location.pathname.slice(-1);
    // =idSub;
  return (
    <div id="main">
    <BrowserRouter>
      <cartContext.Provider value= { [ cart, updateCart ] } >
        <Header />
        <div id="full">
        <subCatContext.Provider value= { [[subCat, idCat, idSub], updateSub ] } >
          <Sidebar />
          <Switch>
          <Route  exact path="/categorie/:x/subcategorie/:y"
                       component={ ()=> Content([x, y])  }
                        />
           <Route  exact path="/"
                       component={ ()=> Content([])  }
                        />
        
        <Route path="*" render={() => <h1> 404 Error! </h1>} />
        </Switch>
        </subCatContext.Provider>
        </div>
      </cartContext.Provider> 
      </BrowserRouter> 
    </div>
  );

}



const rootElement = document.getElementById("root");
ReactDOM.render(<Market />, rootElement);
