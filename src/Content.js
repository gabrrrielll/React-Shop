import marketContext from "./marketContext";
import React from 'react';
import {cartContext} from "./index";
import { flyContext} from "./index";
import {subCatContext} from "./index";
import styled, { css, keyframes } from 'styled-components'

const Content = (props) => {
  const market= React.useContext(marketContext);
  const [ cart , updateCart ] = React.useContext (cartContext);
  const [[subCat, idCat, idSub], updateSub] = React.useContext (subCatContext); 
  const [fly, updateFly] = React.useContext (flyContext);
 
  
  const Cart = (id, name, price, img, e)=>{

  var x = - (window.innerWidth * 0.86 - document.getElementById( id ).offsetLeft -30);
  var y = - (e.clientY - document.getElementById( id ).offsetHeight + 50);
  
  //document.getElementById( "button"+id ).innerHTML ="Ai adaugat"

  var move = {
    img,
    id,
    x, y
  }
  
  updateFly( move );
  
 
  if ( (cart[0] !== undefined) && ( cart.find( q =>q.id ===id )) ){
                        var cart2=cart.filter( q =>q.id !==id );
                                  var newcart =
                                  {
                                    id: id,
                                    name: name,
                                    price: price ,
                                    img: img, 
                                  nr:  (cart[cart.length -1].nr) +1    
                                  }
                            var xcart = [...cart2, newcart]

                            updateCart(  xcart   )
                     
      }  else {
                  var nr=1; 
                    var newcart ={
                      id: id,
                      name: name,
                      price: price ,
                      img: img, 
                      nr: nr++     
                    }          
                updateCart( [  ...cart,  newcart ]  )
              }  

  }
const Delete= (cart, id) =>{

    var  anewcart= cart.filter( q =>q.id !==id );
    updateCart(  anewcart  );

}
const FlyerCart = () =>{
 
    var flying = keyframes`
          0% {top:0; right: 0; } 
          0% {opacity: 0.9; } 
          5% { transform: scale(1.8, 1.8);}
          100% { transform: scale(0.2, 0.2);}
          100% {top:  ${fly.y}px; right: ${fly.x}px; } 
          100% {opacity: 0.2; } 
          `
    const animation = css `
           ${flying} 1s linear ;
         `
  const Flyer = styled.div`
           animation: ${animation}; 
          `

    return (
      <div className="flyer">
           <Flyer className="Flyer"><img src={fly.img} /></Flyer>
        </div>
    )

}


  if(props[0]!== undefined){
    return(
      <div className="content">
      
          <h3 >{subCat}</h3>
                 <div className="categ">
                  <div className="products" >
                        {
                        market[ props[0]].subCategorii[props[1] ].produse.map( (prod, index) =>{
                          if (fly !== undefined && (fly.x !== undefined )&& fly.id === prod.idProdus) {
                            return(
                              <div className="produs" 
                                         id={prod.idProdus}
                                         key={index} >
                                        <img src={prod.imagine} alt="" />
                                        <FlyerCart />
                                        <p className="title"> {prod.numeProdus}</p>
                                        <h4> Pret: {prod.pret} </h4>
                                        <p>Stoc: {prod.numarProduse}</p>
                                        <div className="button" 
                                         id={"button"+prod.idProdus}
                                          onClick={(e) =>Cart(prod.idProdus, prod.numeProdus, prod.pret, prod.imagine, e )}
                                        >Adauga in cos</div>
                              </div>
                              )

                          } else
                          return(
                                    <div className="produs" 
                                               id={prod.idProdus}
                                               key={index} >
                                              <img src={prod.imagine} alt="" />
                                              
                                              <p className="title"> {prod.numeProdus}</p>
                                              <h4> Pret: {prod.pret} </h4>
                                              <p>Stoc: {prod.numarProduse}</p>
                                              <div className="button" 
                                                id={"button"+prod.idProdus}
                                                onClick={(e) =>Cart(prod.idProdus, prod.numeProdus, prod.pret, prod.imagine, e )}
                                              >Adauga in cos</div>
                                    </div>
                                    )
                              }
                        )
                      }
                  </div>
                 </div>
             
      </div>
    ) 
  } else
  return(
    <div className="content">
    
        <h3 >Toate produsele</h3>
            {market.map( (categorie, index) =>{
                                    return(
                                    <div className="categ" 
                                              key={index} >
                               
                                              {categorie.subCategorii.map( (sub, index) =>{
                                                                    return(
                                                                    <div className="products" 
                                                                              key={index} >

                                                                              {sub.produse.map( (prod, index) =>{
                                                                                if (fly !== undefined && fly.id === prod.idProdus) {
                                                                                  return(
                                                                                    <div className="produs" 
                                                                                              id={prod.idProdus}
                                                                                              key={index} >
                                                                                              <img src={prod.imagine} alt="" />
                                                                                              <FlyerCart />
                                                                                              <p className="title"> {prod.numeProdus}</p>
                                                                                              <h4> Pret: {prod.pret} </h4>
                                                                                              <p>Stoc: {prod.numarProduse}</p>
                                                                                              <div className="button" 
                                                                                              id={"button"+prod.idProdus}
                                                                                               onClick={(e) =>Cart(prod.idProdus, prod.numeProdus, prod.pret, prod.imagine, e )}
                                                                                              >Adauga in cos</div>
                                                                                    </div>
                                                                                    )

                                                                                } else
                                                                                      
                                                                                        return(
                                                                                        <div className="produs" 
                                                                                                  id={prod.idProdus}
                                                                                                  key={index} >
                                                                                                  <img src={prod.imagine} alt="" />
                                                                                               
                                                                                                  <p className="title"> {prod.numeProdus}</p>
                                                                                                  <h4> Pret: {prod.pret} </h4>
                                                                                                  <p>Stoc: {prod.numarProduse}</p>
                                                                                                  <div className="button" 
                                                                                                  id={"button"+prod.idProdus}
                                                                                                   onClick={(e) =>Cart(prod.idProdus, prod.numeProdus, prod.pret, prod.imagine, e )}
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

