import { LOGO_URL } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>{
   
    const [btnName,setbtnName] = useState("Login")
    return(
        <div className="header">
            <div className="logo">
            <img className="logo-app" src={LOGO_URL} />  
             </div>
           
            <div className="nav-Items">
                <ul>
                <button className="login" onClick={ () => {
                   btnName === "Login" ? 
                   setbtnName("Logout") :
                   setbtnName("Login")
                 
                
                }}  >{btnName}</button>
                   <li><Link to={"/"}>Home</Link> </li>
                    <li>Cart</li>
                   <li><Link to={"/about"}>About</Link> </li> 
                    <li><Link to={"/contact"}>Contact Us</Link></li> 
                </ul>
               
            </div>
           
        </div>
    )
 }
 export default Header;