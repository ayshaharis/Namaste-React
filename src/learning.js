import React from "react";
import ReactDom from "react-dom";
import { useEffect,useState } from "react";


const Header =()=>{
    return (
        <div className="header-container">
            <div className="logo">
                <img src="">image</img>
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li>About</li>
                    <li>Contact US</li>
                    <li>Home</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//no hoisiting
const fetchData=async()=>{
    const data= await fetch("api");
    
}
const json=await data.json();
//hoisting 
function fetch(){

};
useEffect(()=>{
    fetchDatas();
},[]);

const fetchDatas=async()=>{
    const datas=await fetch("api")
};
const json=await data.json();


const Shimmer=()=>{
    return(
        <div className="shimmmer-container">
            <h1 className="shimmer-cards"></h1>
            <h1 className="shimmer-cards"></h1>
            <h1 className="shimmer-cards"></h1>
            </div>
    );
}






const Header=()=>{
    const [btnName,setBtnName]=useState("Login");
    return(
        <div>
           <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <button className="login-btn" onClick={()=>{
          
                btnName==="login"?setBtnName("Logout"):setBtnName("Login");
            }}>{btnName}</button>

           </ul>
        </div>
    );
}

const body=()=>{
 const [searchText,setSearchtext]=useState(" ");
    return(

        
        <div className="body-container">
            <div className="filtercontainer">
                <input type="text" value={searchText} onChange={(e)=>{
                    setSearchtext(e.target.value)
                    //now whatever we type inside the textbox will attach to a state variable called searchtext
                }}/>
                <button className="searchbtn" onClick={(
                    //here we should get only filterd rest

                    const filterdRestaurants=listofrestaurants.filter((res)=>{res.data.name.toLowercase().includes(searchText.toLowerCase())});
                )=>{}}>Search</button>
                <button onClick={()=>{}}>Top Rated Restaurants</button>
            </div>

        </div>
    );

}



import { createBrowserRouter } from "react-router-dom";



const appRouter=createBrowserRouter([
    
    {   
        path:'/',
        Element:<Header/>
    }
])

import { createBrowserRouter,RouterProvider,outlet } from "react-router-dom";
import About from "./components/About";



const AppLayout=()=>{
    return(
        <div>
            <Header/>
            
            <Body/>
            <About/>
            <ContactUs/>
        </div>
    );

}

const appRouter=createBrowserRouter([

    {
        path:'/',
        element:<AppLayout/>,
        children=[
            {
                path:'/About',
                element:<About/>
        
            },
            {
                path:'/contact',
                element:<ContactUs/>
            }
        

        ]
    }
   
]);
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider routerr={appRouter}/>)

export default AppLayout;




const About=()=>{
 
   const [userInfo,setUserInfo]=useState(null);
        useEffect(()=>{fetchData();

        },[])
          const fetchData=async()=>{
  const data= await fetch(api);
   const json=data.json();
   setUserInfo(json.data);
          }  

          const{name,location,contact}=json?.data;
         return(     
            <div className="about">
            <h1>{name}</h1>
            <h3>{contact}</h3>
            <h3>{location}</h3>
            </div>
            );
   

    
}export default About;



class About extends React.Component{

  
    constructor(props){
        super(props);
        console.log("Parent constructor");
       
    };

    ComponentDidMount(){
        console.log("componentdidmountparent");
    }
    render(){
        console.log("parent render");
       return( <div>
        <h1>This is About page</h1>
        <User name={"AYSHA PROPS"} location={"Kozhikode props"}/>
        <UserClass name={"AYSHA PROPS class"} location={"Kozhikode propsclass"}/>
    </div>);
       
    }
        

}