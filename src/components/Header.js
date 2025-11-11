import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{
  const [logBtn,SetLogBtn]=useState("Login");
  const btn="Logout";

  //useContext is a hook to access the context . avoids props drilling . passing props between components is cumbersome. 
  const {loggedInUser}=useContext(UserContext);
  //subscribing to the store using useSelector hook
  const cartItems=useSelector((store)=>store.cart.items);
  console.log("cartItems",cartItems);
    return(
      <div className="flex justify-between bg-cyan-900">
        <div className="py-2">
            <img src={LOGO_URL}  className="w-22 "/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4" >
                <li><Link to ="/" className="px-2 text-white">Home</Link></li>
                <li><Link to="/about" className="px-2 text-white"> About Us</Link></li>
                <li><Link to="/contact" className="px-2 text-white">Contact US</Link></li>
                <li><Link to="/grocery" className="px-2 text-white">Grocery</Link></li>
                <li><Link  to="/cart" className="px-2  text-white">cart-{cartItems.length}</Link></li>
                <li><Link className="px-2  text-white">User : {loggedInUser}</Link></li>
            </ul>
            <div>
              <button className="px-2"onClick={()=>{
                
                logBtn==="Login"?SetLogBtn("Logout"):SetLogBtn("Login");
                
              }}>{logBtn}</button>
            </div>
        </div>
      </div>
    
    );
};
export default Header;