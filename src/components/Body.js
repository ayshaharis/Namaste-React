import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    console.log("data received");
    console.log(json);

    setListOfRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("here is the filtered res");
    console.log(listOfRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="p-2 m-2">
          <input
            type="text"
            className="border px-4 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="filter-btn px-2 bg-amber-200 rounded-lg py-2 mx-2"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="top-rated-button">
          {
            <button
              className="filter-btn px-2 bg-amber-200 rounded-lg py-2"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.4
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Top Rated restaurants
            </button>
          }
        </div>
      </div>

      <div className="flex ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className=" border border-gray-200 shadow shadow-neutral-500 bg-gray-100 m-2 rounded-lg"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
