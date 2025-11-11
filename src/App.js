import React, { Suspense ,lazy} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResInfo from "./components/ResInfo";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Grocery from "./components/Grocery";
import ShimmerUI from "./components/ShimmerUI";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery=lazy(()=>import("./components/Grocery"));









const AppLayout=()=>{
    return(
        <Provider store={appStore}>
         <div className="app-layout">
         <Header/>
         <Outlet/>
       
        </div>
        </Provider>
       
        
     
    );
};


const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
         {
            path:"/",
            element:<Body/>

         },
         {
            path:"/about",
            element: <About/>,
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId",
            element:<ResInfo/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<ShimmerUI/>}><Grocery/></Suspense>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
    ],
        errorElement:<Error/>
    },
   
])







const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
