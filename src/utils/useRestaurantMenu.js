import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const getMenuUrl = (resId) => `${MENU_API}${resId}`;

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log("Fetching menu from:", getMenuUrl(resId));
      const response = await fetch(getMenuUrl(resId));

      if (!response.ok) {
        throw new Error(`Failed to fetch menu (status: ${response.status})`);
      }

      const json = await response.json();
      setResInfo(json.data || json); 
    } catch (err) {
      console.error("Error fetching menu:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (resId) {
      fetchData();
    }
  }, [resId]);

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
