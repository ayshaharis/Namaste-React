import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu=(resId)=>{
  

    const [resInfo,setResInfo]=useState(null);
        const fetchData=async()=>{
            const data=await fetch(MENU_API+resId);
            const json=await data.json();//dont forget this paranthesis() . forgteiing it will end up in destructre propetry error
            setResInfo(json.data);
            
        };
        useEffect(()=>{
            fetchData();
        },[]);

        return resInfo;

       
    
};

export default useRestaurantMenu;