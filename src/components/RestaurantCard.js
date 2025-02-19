import { CDN_URL } from "../utils/constants";
import ResInfo from "./ResInfo";
import { Link } from "react-router-dom";

const RestaurantCard=(props)=>{
  
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,id}=resData.info; 
   
    return(
    
        <div className="">
        <img src={CDN_URL+cloudinaryImageId}  className="m-2 px-4 rounded-xl"/>
        <div className="m-2 p-2">
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
         <h3>{avgRating}</h3>
         <h3>{costForTwo}</h3>
        </div>
       
        </div>

    
        
    );
};

export default RestaurantCard;