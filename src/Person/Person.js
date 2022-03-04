import React  from "react";
import "./Person.css"
import Radium  from "radium";


const Person =(props)=>{
  const style={
    '@media(min-width:500px)':{
      width:'450px'
    } 
  };
return(
 

    <div className="Person" style={style}>
      <h1 onClick={props.click}> Hello this is {props.name} and age is {props.age}</h1> 

    <input type="text" onChange={props.change} ></input>
   
      
    </div>
)

}
export default Radium(Person);
