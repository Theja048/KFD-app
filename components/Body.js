import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";
 import resList from "../Utils/DataList";
const Body = () => {
const [listofRestarant, setlistofRestarant] = useState(resList)


 
    return(
        <div className="body">
          <div className="search">Search</div>
          <button className="filter" onClick={ () =>{
          const filterList = listofRestarant.filter( 
              (res) =>res.info.avgRating > 4 )

             setlistofRestarant(filterList)
          }}>Filter</button>
              
          <div className="Rest-container">

          {
                listofRestarant.map( (restaurant) =>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
             ))}
          
             
          </div>
        </div>
    )
}

export default Body;