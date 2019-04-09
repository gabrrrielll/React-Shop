import marketContext from "./marketContext";
import React from 'react';
import {cartContext} from "./index";
import {subCatContext} from "./index";

const Content = (props) => {
  const market= React.useContext(marketContext);
  const [ cart, updateCart ] = React.useContext (cartContext);
  const [subCat, updateSub] = React.useContext (subCatContext);

  return(
    <div className="content">
    
        <h3 >{subCat}</h3>
            {market.map( (categorie, index) =>{
                                    return(
                                    <div className="categ" 
                                              key={index} >
                                             
                                              {categorie.subCategorii.map( (sub, index) =>{
                                                                    return(
                                                                    <div className="products" 
                                                                              key={index} >

                                                                              {sub.produse.map( (prod, index) =>{
                                                                                        return(
                                                                                        <div className="produs" 
                                                                                                  key={index} >
                                                                                                  <img src={prod.imagine} alt="" />
                                                                                                  <p className="title"> {prod.numeProdus}</p>
                                                                                                  <h4> Pret: {prod.pret} </h4>
                                                                                                  <p>Stoc: {prod.numarProduse}</p>
                                                                                                  <div className="button" 
                                                                                                  onClick={() => updateCart(cart + 1)}
                                                                                                  >Adauga in cos</div>
                                                                                        </div>
                                                                                        )
                                                                                      }
                                                                                  )                                                              
                                                                              }        
                                                                    </div>
                                                                    )
                                                                  }
                                                              )                                                              
                                               }   
                                    </div>
                                    )
                                  }
                              )                               
            }      
    </div>
  ) 

}

export default Content;

