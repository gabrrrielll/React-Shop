import React from "react";


const Content = (props) => {

  return(
    <div className="content">
        <h3 > Produse</h3>
            {props.date.map( (categorie, index) =>{
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
                                                                                                  onClick={ ()=>inCart(prod.idProdus) }>Adauga in cos</div>  
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


function inCart (key) {
  return(
    console.log(key)

  )
  }
export default Content;

