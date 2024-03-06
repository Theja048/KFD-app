import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";


const RestaurantMenu = () => {

const [resinfo,setresinfo] = useState(null)
    useEffect( () =>{
            fetechMenu();
    },[]);

    const fetechMenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=74646&catalog_qa=undefined&submitAction=ENTER"
            );
          const json = await data.json();
          console.log(json);
          setresinfo(json.data);
    };
    if(resinfo === null ) return <Shimmer />

     const {name,cuisines,city,areaName,sla,costForTwoMessage

     } = resinfo?.cards[0]?.card?.card?.info;
              
    const {ItemsCards} = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemcards;
         console.log(ItemsCards);
    return(
     <div className="menu">

                                     <h1>{ name}</h1>
                            <p>{cuisines.join(", ")}</p>
                     <p>{areaName}, {sla.lastMileTravelString}</p>
                 <p>{sla.slaString} - {costForTwoMessage}</p> 
{/*        
                           <h1>{ resinfo?.cards[0]?.card?.card?.info?.name}</h1>
                            <p>{resinfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
                     <p>{resinfo?.cards[0]?.card?.card?.info?.areaName}, {resinfo?.cards[0]?.card?.card?.info?.sla.lastMileTravelString}</p>
                 <p>{resinfo?.cards[0]?.card?.card?.info?.sla.slaString} {resinfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>  */}
       
    

        <ul>
            <li>Biryani</li>
            <li>Meals</li>
            <li>BreakFast</li>
        </ul>
     </div>
)
}
export default RestaurantMenu;