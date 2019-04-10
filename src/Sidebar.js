import React from 'react';
import marketContext from "./marketContext";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {subCatContext} from "./index";


const Sidebar = () => {
  const market= React.useContext(marketContext); 
  return(
    <div className="sidebar">
        <h3 > Categorii</h3>
            {
              market.map( (categorie, index) =>{
                                    return(
                                    <div className="category" 
                                              key={index} >
                                              {categorie.numeCategorie}
                                              <Subcategory index={index} />
                                    </div>
                                    )
                                  }
                              )                                
            }        
    </div>
  ) 
};

const Subcategory = (props) =>{
  const market= React.useContext(marketContext);
  const [[subCat, idCat, idSub], updateSub] = React.useContext (subCatContext);
  return(
    <div className="subcat" >
   
       {market[props.index].subCategorii.map( (sub) =>{
            var idSub=market[props.index].subCategorii.indexOf(sub);
            return(
            <div className="subcategory" 
                    key={idSub} 
                    onClick={ ()=> updateSub([sub.numeSubcategorie, props.index, idSub])  } >  
                     <Link to={ "/categorie/" + props.index+ "/subcategorie/" + idSub } >{ sub.numeSubcategorie } </Link>
                           
            </div>
              )
            }
           )
         }
    
    </div>
  )
}

export default Sidebar;
