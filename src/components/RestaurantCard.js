import { CDN_URL } from "../utils/constants";
import ResInfo from "./ResInfo";
import { Link } from "react-router-dom";

const RestaurantCard=(props)=>{
  
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,id}=resData.info; 
   
    return(
    
        <div className="res-container">
        <img src={CDN_URL+cloudinaryImageId}  className="resimage"/>
        <div className="content">
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
         <h3>{avgRating}</h3>
         <h3>{costForTwo}</h3>
         <h3>{id}</h3>
        </div>
       
        </div>

    
        
    );
};

export default RestaurantCard;