import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../Utils/DataList"
import { Shimmer } from "./Shimmer";
 
 const Body = () => {
  const [listofRestarant, setlistofRestarant] = useState([]);
  const [searchText,setsearchText] = useState("");
const [filterList,setfilterList] = useState([])

console.log("body render")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
		
			const sdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
			const json = await sdata.json();
			     console.log(json); 
			
			 setlistofRestarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setfilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     

	 };
  
  
  return listofRestarant.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
      <div className="search">
         <input type="text" className="search-box" value={searchText} onChange={
          (e) =>{
              setsearchText(e.target.value);
         }}></input>
                <button className="search-btn" onClick={ () => {
                  //filtr and update ui
                  // console.log(searchText)

                const filterList = listofRestarant.filter( (rest) =>
                  rest.info.name.toLowerCase().includes(searchText)
                  )
          setfilterList(filterList)
         }}>Serach</button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = listofRestarant.filter((res) => res.info.avgRating > 4.2);
          setlistofRestarant(filterList);
        }}
      
        >Filter
      </button>
      </div>
      <div className="Rest-container">
			
			{filterList?.map((restaurant) => (
           <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
        ))
			}
      </div>
    </div>
  );
};

export default Body;