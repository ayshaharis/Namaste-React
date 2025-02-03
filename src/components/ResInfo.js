

import { useEffect,useState } from "react";
import ShimmerUI from "./ShimmerUI";


const ResInfo=()=>{
const [resInfo,setResInfo]=useState(null);
useEffect(()=>{
 fetchInfo();   
},[]);


const fetchInfo = async()=>{
const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2404392&lng=75.8156257&restaurantId=758472&catalog_qa=undefined&submitAction=ENTER");
const json= await data.json();
setResInfo(json.data);

};

console.log(resInfo);

console.log("thename below");
console.log(resInfo?.cards[2]?.card?.card?.info?.labels?.name);
 

//const {cuisines}=resInfo?.data?.cards[2]?.card?.card?.info?.cuisines;


if (resInfo===null)return <ShimmerUI/>

const {name,cuisines,avgRating,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;


const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div>
            <h1>{name}  - {avgRating}</h1>
            <h3>{costForTwoMessage} </h3>
            <h3>{cuisines.join(" ")}</h3>
         <ul>
            <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name} - Rs {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.price/100}</li>
            <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.name}</li>
            <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.name}</li>
            <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[3]?.card?.info?.name}</li>
            <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[4]?.card?.info?.name}</li>
           {itemCards.map((item)=><li>{item.card.info.name}</li>)}
         </ul>
        </div>
    )

}


export default ResInfo;



