
import React from "react";

class UserClass extends React.Component{

 constructor(props){

    console.log("constructor child");
    super(props);

    this.state={
        count:0,
        count2:2
    };
 
 }

 componentDidMount(){
    console.log("childd compdidmount method");

 }

 //use this keyword while destructuring the props 
    render(){

        console.log("childd render method");
        const {name,location}=this.props;
        const {count,count2}=this.state;
        return(
            <div>
                <h1>state variable from class={count} and  {count2}</h1>
                
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h3>Contact:Kozhikode</h3>
                </div>
        )
    }

}

export default UserClass;