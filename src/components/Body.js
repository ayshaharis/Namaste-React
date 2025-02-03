import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useState ,useEffect} from "react";
   

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    
    
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{ 

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2404392&lng=75.8156257&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") ;
        const json=await data.json();
        console.log("data received");
        console.log(json);  
       
       setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
       setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
       console.log("here is the filtered res");
       console.log(listOfRestaurants);
        


    }
   
    
    return listOfRestaurants.length===0? <ShimmerUI/>:(
        <div className="body">
            <div className="filter">
              <div className="search-btn">
                    <input type="text" className="input-bar" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                     
                       const filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            
                       setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>

                <div className="top-rated-button">

                {<button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.4);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated restaurants</button> }

                </div>
              
                
            </div>
          
            
             <div className="reslist-container">
             {
              filteredRestaurants.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/> )
              
            }
             </div>
           
            
        </div>
    );
};
export default Body;