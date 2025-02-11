import User from "./User";
import UserClass from "./UserClass";
import React from "react";

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
  


export default About;