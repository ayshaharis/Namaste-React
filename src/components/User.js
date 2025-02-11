import { useState } from "react";

const User=(props)=>{
    //reciev props inside {as props is an object}
    const {name,location}=props;
    const [count]=useState(0);
    const[count2]=useState(2);
return (
 <div className="user-card">
    <h1>state variable count ={count}</h1>
    <h2>{name}</h2>
    <h3>Location:{location}</h3>
    <h4>Contact :8078757470</h4>
</div>
);
}

export default User;
