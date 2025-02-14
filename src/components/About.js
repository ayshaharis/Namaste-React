
import React from "react";
import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const About=()=>{
 
   const [userInfo,setUserInfo]=useState(null);

        useEffect(()=>{
            fetchData();

        },[]);

   const fetchData=async()=>{
   const data= await fetch("https://api.github.com/users/ayshaharis");

   const json=await data.json();
   setUserInfo(json);
   console.log(json);
   console.log("userinfo below")
   console.log(userInfo);
          }  

          
         if(userInfo===null)return <ShimmerUI/>
         return(     
            <div className="about">
            <h1>Name:{userInfo.login}</h1>
            <h3>Company:{userInfo.company}</h3>
            <h3>Location:{userInfo.location}</h3>
            </div>
            );
        }

export default About;




