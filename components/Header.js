import { LOGO_URL } from "../Utils/constant";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
            <img className="logo-app" src={LOGO_URL} />  
             </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
 }
 export default Header;