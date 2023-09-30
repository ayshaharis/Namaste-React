import React from "react";
import  ReactDOM  from "react-dom/client";





//passing props to functional component  -> one method

const RestaurantCard=(props)=>{
   
    return(
        <div>
        <h1>{props.resname}</h1>
        <h2>{props.cuisine}</h2>
        </div>
    );
    
};



//destructuing  on the fly -> second method
const RestaurantCard1=({resname,cuisine,rating})=>{
    return (
        <div>
            <h1>{resname}</h1>
            <h1>{cuisine}</h1>
            <h1>{rating}</h1>
        </div>
    );

};

//or we can pass data like ths also

const RestaurantCard2=(props)=>{

    const {resname,cuisne}=props;
    return(
        <div>
        <h1>{resname}</h1>
        <h1>{cuisine}</h1>
        <h1>{rating}</h1>
    </div>
    );

}

const Body=()=>{
    return(
        <div>
            <RestaurantCard resname="Tawuk" cuisine="Arabic" rating="5.0"/>
            <RestaurantCard resname="KFC" cuisine="Fast Food" rating="3.0"/>
        </div>
    );
};