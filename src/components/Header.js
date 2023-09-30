import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
  const [logBtn,SetLogBtn]=useState("Login");
  const btn="Logout";
  console.log("header rendered");
    return(
      <div className="header">
        <div className="logo-container">
            <img src={LOGO_URL}  className="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>cart</li>
            </ul>
            <div>
              <button onClick={()=>{
                
                logBtn==="Login"?SetLogBtn("Logout"):SetLogBtn("Login");
                
              }}>{logBtn}</button>
            </div>
        </div>
      </div>
    
    );
};
export default Header;