import React,{Component}  from "react";
import Style from "./Person.module.css"


class Person extends Component{
  
  render(){
  // const style={
  //   '@media(min-width:500px)':{
  //     width:'450px'
  //   } 
  console.log('[Person.js] rendering..')
  
return(
 

    <div className={Style.Person} >
      <h1 onClick={this.props.click}> Hello this is {this.props.name} and age is {this.props.age}</h1> 

    <input type="text" onChange={this.props.change} ></input>
   
      
    </div>
   
   
  //   [<h1 key="i1" onClick={this.props.click}> Hello this is {this.props.name} and age is {this.props.age}</h1> ,

  // <input key="i2" type="text" onChange={this.props.change} ></input>
// ]
  
)

}
}
export default Person;
