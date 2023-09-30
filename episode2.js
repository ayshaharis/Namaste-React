import React from "react";
import  ReactDOM  from "react-dom/client";

//react component and react  element 
const root=ReactDOM.createRoot(document.getElementById("root"));
const HeadingComponent=()=>{
    return (<div>
        <h1 className="heading">This Is my first react Functional component</h1>
        <HeadingComponent1/>
        </div>);
};

//function compoment another syntax 

const HeadingComponent1=()=>(
    <div>
<h1 id="heading2">This is also a functional componet without return in its syntax AND This is rendered using composition that means
a component inside another component</h1>

    </div>

);

root.render(<HeadingComponent/>);
