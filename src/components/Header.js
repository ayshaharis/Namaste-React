import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <ul >
                <li><Link to ="/" className="link">Home</Link></li>
                <li><Link to="/about" className="link"> About Us</Link></li>
                <li><Link to="/contact" className="link">Contact US</Link></li>
                <li><Link to="/grocery" className="link">Grocery</Link></li>
                <li><Link>cart</Link></li>
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