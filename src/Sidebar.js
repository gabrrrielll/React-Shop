import React from "react";
import marketContext from "./marketContext";
import { BrowserRouter, Route, Link } from "react-router-dom";


export function Display(param) {
 // console.log(param);
  return  (
    <div className="content">
    
    </div>
  );
}

const Subcategory = (props) =>{
  const market= React.useContext(marketContext);
  return(
    <div className="subcat" >
    <BrowserRouter>
       {market[props.index].subCategorii.map( (sub) =>{
 
            return(
            <div className="subcategory" 
                    key={market[props.index].subCategorii.indexOf(sub)}  > 
                     <Link to={ sub.numeSubcategorie } >{ sub.numeSubcategorie } </Link>
                     <Route exact path={"/"+ sub.numeSubcategorie } 
                       component={ ()=> Display(sub.numeSubcategorie)  } />         
            </div>
              )
            }
           )
         }
      </BrowserRouter>
    </div>
  )
}

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
                                              <Subcategory index={index}  />
                                    </div>
                                    )
                                  }
                              )                                
            }        
    </div>
  ) 
};


export default Sidebar;
