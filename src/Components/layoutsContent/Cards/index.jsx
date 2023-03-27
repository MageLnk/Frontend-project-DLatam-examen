// Components

import ItemCards from "./ItemCard";

// Style 

import "./style.css";

    const Cards= () => {

     return (
        <div className="container container-p text-center">

            <h2 style={{width: '100%'}}>PRODUCTOS</h2>
            <div className="line"></div>
          
          <ItemCards />
        </div>  
     )

    };

export default Cards;
