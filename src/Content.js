import marketContext from "./marketContext";
import React from 'react';
import {cartContext} from "./index";
import { flyContext} from "./index";
import {subCatContext} from "./index";

const Content = (props) => {
  const market= React.useContext(marketContext);
  const [ cart , updateCart ] = React.useContext (cartContext);
  const [[subCat, idCat, idSub], updateSub] = React.useContext (subCatContext); 
  const [fly, updateFly] = React.useContext (flyContext);
 
  
  const Cart = (id, name, price, img, e)=>{
  // console.log(e.clientX, e.clientY);
 
  console.log(id);
  updateFly( id );


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
                                                                                        if (fly === prod.idProdus) {
                                                                                        // console.log(fly, prod.idProdus)
                                                                                        return(
                                                                                          <div className="produs" 
                                                                                                    key={index} >
                                                                                                    <img src={prod.imagine} alt="" />
                                                                                                    <div className="flyer">
                                                                                                                <img className="fly" src={prod.imagine} />
                                                                                                            </div>
                                                                                                    
                                                                                                    <p className="title"> {prod.numeProdus}</p>
                                                                                                    <h4> Pret: {prod.pret} </h4>
                                                                                                    <p>Stoc: {prod.numarProduse}</p>
                                                                                                    <div className="button" 
                                                                                                     onClick={(e) =>Cart(prod.idProdus, prod.numeProdus, prod.pret, prod.imagine, e )}
                                                                                                    >Adauga in cos</div>
                                                                                          </div>
                                                                                          )
                                                                                        } else
                                                                                        return(
                                                                                        <div className="produs" 
                                                                                                  key={index} >
                                                                                                  <img src={prod.imagine} alt="" />
                                                                                                  
                                                                                                  <p className="title"> {prod.numeProdus}</p>
                                                                                                  <h4> Pret: {prod.pret} </h4>
                                                                                                  <p>Stoc: {prod.numarProduse}</p>
                                                                                                  <div className="button" 
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

