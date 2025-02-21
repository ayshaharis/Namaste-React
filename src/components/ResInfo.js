
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";




const ResInfo=()=>{

const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);

if (resInfo===null)return <ShimmerUI/>

const {name,cuisines,avgRating,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;


const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return(
        <div>
            <h1 className="font-bold text-center m-2 p-2">{name}  - {avgRating}</h1>
            <h3 className="text-center font-bold m-2 p-2">{costForTwoMessage} </h3>
            <h3 className="text-center m-1 p-1">{cuisines.join(" , ")}</h3>
             {categories.map((category)=><RestaurantCategory data={category.card.card}/>)}
         {/* <ul>
           
           {itemCards.map((item)=><li   key={item.card.info.id}>{item.card.info.name} - Rs{item.card.info.price/100||item.card.info.defaultPrice/100}</li>)}
         </ul> */}
        </div>
    )

}


export default ResInfo;



