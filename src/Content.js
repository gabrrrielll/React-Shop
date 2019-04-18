import marketContext from "./marketContext";
import React from 'react';
import {cartContext} from "./index";
import {subCatContext} from "./index";

const Content = (props) => {
  const market= React.useContext(marketContext);
  const [ cart , updateCart ] = React.useContext (cartContext);
  const [[subCat, idCat, idSub], updateSub] = React.useContext (subCatContext); 
 
  
  const Cart = (id, name, price, img)=>{
   //console.log(cart[0]);
  if ( (cart[0] !== undefined) && ( cart.find( q =>q.id ===id )) ){
                  //console.log(cart.find( q =>q.id ===id ));
             


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
                           
                          // cart2[cart2.length -1].nr = cart[cart.length -1].nr +1;
                            updateCart(  xcart   )
                          // Delete(cart, id) 
                    
                          console.log(cart)
                  
                  
                
  }  else
              {
              var nr=1; 
                var newcart ={
                  id: id,
                  name: name,
                  price: price ,
                  img: img, 
                  nr: nr++     
                }
            
          // console.log(JSON.stringify(cart2))
          
            updateCart( [  ...cart,  newcart ]  )

          }  

      

 
  }
const Delete= (cart, id) =>{

    var  anewcart= cart.filter( q =>q.id !==id );
    updateCart(  anewcart  );
    console.log(id);
    console.log(cart);
    console.log(anewcart);
}

  if(props[0]!== undefined){
    return(
      <div className="content">
      
          <h3 >{subCat}</h3>
                 <div className="categ">
                  <div className="products" >
                        {
                        market[ props[0]].subCategorii[props[1] ].produse.map( (prod, index) =>{
                          return(
                                    <div className="produs" 
                                              key={index} >
                                              <img src={prod.imagine} alt="" />
                                              <p className="title"> {prod.numeProdus}</p>
                                              <h4> Pret: {prod.pret} </h4>
                                              <p>Stoc: {prod.numarProduse}</p>
                                              <div className="button" 
                                          
                                                onClick={() =>Cart(prod.idProdus, prod.numeProdus, prod.pret, prod.imagine )}
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
                                                                                        return(
                                                                                        <div className="produs" 
                                                                                                  key={index} >
                                                                                                  <img src={prod.imagine} alt="" />
                                                                                                  <p className="title"> {prod.numeProdus}</p>
                                                                                                  <h4> Pret: {prod.pret} </h4>
                                                                                                  <p>Stoc: {prod.numarProduse}</p>
                                                                                                  <div className="button" 
                                                                                                   onClick={() =>Cart(prod.idProdus, prod.numeProdus, prod.pret, prod.imagine )}
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

