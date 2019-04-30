import React, { useContext} from 'react';
import {cartContext} from "./index";
import { BrowserRouter, Route, Link } from "react-router-dom";


const Header = () => {
  
  const [ cart, updateCart ] = useContext (cartContext); 
  const [showCart, updateShowCart] = React.useState(false);

  const upCart=()=>{
    showCart ? updateShowCart(false) : updateShowCart(true);
  }

  var nrProd = cart.reduce (function (acc, currentValue) {
    return acc + currentValue.nr
  }, 0)

  var total= cart.reduce (function (acc, currentValue) {
    return acc +  currentValue.nr * currentValue.price
  }, 0)

  const toDelete = ( id) =>{ 
    var  anewcart= cart.filter( q =>q.id !==id );
    updateCart(  anewcart  );
    //console.log(anewcart);
  }

  const Cos = () =>{
   if (showCart === true){
    return (
      <div className="cos">
            
        {cart.map( ( x, index )  =>{
          return( 
            < div className="cosProd" key={index}> 
              <table>
                <tbody>
                <tr>
                    <td>
                      <img src={x.img} alt={x.name} />
                    </td>
                    <td>
                    <div className="cosNume"> {x.name} </div>
                    </td>
                    <td>
                    <div className="cosPret"> {x.price} Lei  </div>
                    <div className="cosBuc"> {x.nr} buc.  </div>
                      <a className="delete"  href="#" title="Sterge produsul din cos" onClick={()=>toDelete(x.id)}>&#10060;</a>
                    
                    </td>
                </tr>
                </tbody>
              </table>
            </ div>
          )
        })}
        
      <div className="pretTotal">
          <span className="nr">
                {nrProd} Produse
          </span>
          <span className="tot">
                Total: {total} Lei
          </span>     
      </div>
  </div>
  )

   } else {
     return(
       <div></div>
     )
   }
    
  }

  return (
    <div className="header">
    <Link to={ "/"  } ><h1> Market</h1> </Link>
   
      <div id="cart" onClick={ ()=>upCart()} >
      <div className="count">{nrProd} </div>
        <img src="http://www.logospng.com/images/104/shopping-cart-flat-icon-page-3-104468.png" alt="cart"/>
      </div>
        <Cos />
    </div>
  );
};


  

export default Header;
