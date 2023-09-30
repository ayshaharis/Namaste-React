import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useState ,useEffect} from "react";
   

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    
    
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.23256094525848&lng=75.79296514391899&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;
        const json=await data.json();
        console.log(json);   
       setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
       console.log(listOfRestaurants); 
        

    }
    if(listOfRestaurants.length===0){
        return <ShimmerUI/>;
    }
    
    return(
        <div className="body">
            <div>
                { <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                    setListOfRestaurants(filteredList);
                }}>Top Rated restaurants</button> }
            </div>
          
            
             <div className="reslist-container">
             {
              listOfRestaurants.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/> )
              
            }
             </div>
          
           
            
           
           
            
        </div>
    );
};
export default Body;