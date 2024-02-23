import RestaurantCard from "../components/RestaurantCard";
import resList from "../Utils/DataList";
const Body = () => {
    return(
        <div className="body">
          <div className="search">Search</div>
          <div className="Rest-container">

          {
                resList.map( (restaurant) =>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
             ))}
          
              {/* <RestaurantCard resData = {resList[0]} />
              <RestaurantCard resData = {resList[1]} />
              <RestaurantCard resData = {resList[2]} />
              <RestaurantCard resData = {resList[3]} />
              <RestaurantCard resData = {resList[4]} />
              <RestaurantCard resData = {resList[5]} />
              <RestaurantCard resData = {resList[6]} />
              <RestaurantCard resData = {resList[7]} />
              <RestaurantCard resData = {resList[8]} />
              <RestaurantCard resData = {resList[9]} />
              <RestaurantCard resData = {resList[10]} />
              <RestaurantCard resData = {resList[11]} />
              <RestaurantCard resData = {resList[12]} />
              <RestaurantCard resData = {resList[13]} />
              <RestaurantCard resData = {resList[14]} />
              <RestaurantCard resData = {resList[15]} /> */}
          </div>
        </div>
    )
}

export default Body;