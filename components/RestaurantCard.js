import { CDN_URL } from "../Utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
     cloudinaryImageId,
     name,
     cuisines,
     avgRatingString,
     deliveryTime,
     costForTwo
    } = resData?.info;
     return(
         <div className="res-card">
             <img className="res-pic" src={CDN_URL + 
            resData.info.cloudinaryImageId
         }
         />
             <h3>{name}</h3>
             <h4 className="cuisin">{cuisines.join(", ")}</h4>
             <h6>{avgRatingString} stars</h6>
             <h6>{deliveryTime} minutes</h6>
             <h6>{costForTwo} </h6>
         </div>
       
     )
 }
export default RestaurantCard 