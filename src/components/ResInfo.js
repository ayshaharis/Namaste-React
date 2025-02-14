
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const ResInfo=()=>{

const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);

if (resInfo===null)return <ShimmerUI/>

const {name,cuisines,avgRating,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;


const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div>
            <h1>{name}  - {avgRating}</h1>
            <h3>{costForTwoMessage} </h3>
            <h3>{cuisines.join(" ")}</h3>
            
         <ul>
       
           {itemCards.map((item)=><li   key={item.card.info.id}>{item.card.info.name} - Rs{item.card.info.price/100}</li>)}
         </ul>
        </div>
    )

}


export default ResInfo;



