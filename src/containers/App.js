
import './App.css';
import Persons from '../components/Persons/Persons';
import React, { Component } from "react";
import Radium,{StyleRoot} from 'radium';


class App extends Component {


state ={
  persons:[
    {id:"1",name:"sagar",age:"23"},
    {id:"2",name:"ajay",age:"35"},
    {id:"3",name:"Sanjay", age:"28"},
    {id:"4",name:"bijay", age:"39"}
  ],
  showPerson :false
   
}


   changeHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName, age:"32"},
        {name:"sagar",age:"25"},
        {name:"Sanjay", age:"28"}
      ]
    });

  }

  typeHandler=(event,id)=>{

    const personIndex =this.state.persons.findIndex(p=>{
      return p.id===id;
    });

    const person = {...this.state.persons[personIndex]};
    
    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons :persons})

    

  }
 
  deleteHandler=(personIndex)=>{
    const persons =this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
    
  }

  toggleHandler =()=>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson :!doesShow
    })
  }

  render(){
    const style ={
      font:'inherit',
      backgroundColor:"green",
      color:"white",
      border:'2px solid blue',
      padding: '8px',
      cursor:"pointer",
      ':hover': {
        backgroundColor:"lightgreen",
        color:"black"
      }

    };
    let persons =null;
    if(this.state.showPerson){
      persons=(
        <div>
          <Persons
          persons = {this.state.persons}
          clicked = {this.deleteHandler}
          changed={this.typeHandler}
          />
\        </div>

      );
      style.backgroundColor="red";
      style[':hover']= {
        backgroundColor:"salmon",
        color:"black" 
      }
    };

const classes =[];
if(this.state.persons.length<=2){
  classes.push('red');
}
if(this.state.persons.length<=1){
  classes.push('bold');
}
  return (
    <StyleRoot>
    <div className="App">
      <p className={classes.join(' ')} >This is react app</p>
      <button style={style} onClick={this.toggleHandler}>click me</button>

     {persons}
     </div>
     </StyleRoot>
  )
}
}

export default Radium(App);

