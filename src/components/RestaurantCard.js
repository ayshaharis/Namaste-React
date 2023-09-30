import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData.info; 
   
    return(

        <div className="res-container">
        <img src={CDN_URL+cloudinaryImageId}  className="resimage"/>
        <div className="content">
        <h2>{name}</h2>
        <h3>{cuisines.join(" ,")}</h3>
         <h3>{avgRating}</h3>
         <h3>{costForTwo}</h3>
        </div>
       
        </div>
    );
};

export default RestaurantCard;