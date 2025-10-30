import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";
import RestaurantCategory from "./RestaurantCategory";

const ResInfo = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // Loading and error handling
  if (loading) return <ShimmerUI />;
  if (error) return <h1 className="text-center text-red-500">Error: {error}</h1>;
  if (!resInfo) return <ShimmerUI />;
console.log("resInfo structure:", resInfo);
  // Safe extraction of restaurant info
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};
  const {
    name = "Restaurant",
    cuisines = [],
    avgRating = "N/A",
    costForTwoMessage = "N/A",
  } = restaurantInfo;

  const MENU_TYPE=
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const cardsArray =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    console.log("cardsArray structure:", cardsArray);
  const categories = cardsArray.filter(
    c => c.card?.card?.["@type"] === MENU_TYPE
  );
 

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Restaurant Info */}
      <h1 className="font-bold text-center text-2xl mb-2">
        {name} - {avgRating}
      </h1>
      <h3 className="text-center font-semibold mb-2">{costForTwoMessage}</h3>
      <h3 className="text-center mb-4">{cuisines.join(" , ")}</h3>

      {/* Categories */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title || index}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index) // toggle open/close
          }
        />
      ))}
    </div>
  );
};

export default ResInfo;
