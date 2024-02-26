import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../Utils/DataList"
//import { Shimmer } from "./Shimmer";
 
 const Body = () => {
  const [listofRestarant, setlistofRestarant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
		
			const sdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
			const json = await sdata.json();
			     console.log(json); 
			// console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
			 setlistofRestarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	 };
  

  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        className="filter"
        onClick={() => {
          const filterList = listofRestarant.filter((res) => res.info.avgRating > 4);
          setlistofRestarant(filterList);
        }}
      
        >Filter
      </button>

      <div className="Rest-container">
			
			{listofRestarant?.map((restaurant) => (
           <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
        ))
			}
      </div>
    </div>
  );
};

export default Body;