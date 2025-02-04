

import { useEffect,useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const ResInfo=()=>{

console.log("REACHED RESINFO");
const {resId}=useParams();
console.log(resId);
const [resInfo,setResInfo]=useState(null);
useEffect(()=>{
 fetchInfo();   
},[]);


const fetchInfo = async()=>{
const data=await fetch(MENU_API+resId);
const json= await data.json();
setResInfo(json.data);

};


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
       
           {itemCards.map((item)=><li>{item.card.info.name} - Rs{item.card.info.price/100}</li>)}
         </ul>
        </div>
    )

}


export default ResInfo;



