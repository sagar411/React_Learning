import Style  from './App.module.css'
import Persons from '../components/Persons/Persons';
import React, { Component } from "react";
import Cockpit from '../components/Cockpit/Cockpit'



class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }


state ={
  persons:[
    {id:"1",name:"sagar",age:"23"},
    {id:"2",name:"ajay",age:"35"},
    {id:"3",name:"Sanjay", age:"28"},
    {id:"4",name:"bijay", age:"39"}
  ],
  showPerson :false
    
}

static getDerivedStateFromProps(props,state){
  console.log('[App.js] getDerivedStateFromProps',props);
  return state;
}
// componentWillMount(){
//   console.log('[App.js] componentWillMount');

// }

componentDidMount(){
  console.log('[App.js] componentDidMount');
}
componentDidUpdate(){
  
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
    console.log('[App.js] render');
    let persons =null;

  
    if(this.state.showPerson){
      persons=
          <Persons
          persons = {this.state.persons}
          clicked = {this.deleteHandler}
          changed={this.typeHandler}
          />

    };


  return (
  
    <div className={Style.App}>
     
     <Cockpit 
      appName={this.props.title}
     showPerson ={this.state.showPerson}
            persons={this.state.persons}
            clicked ={this.toggleHandler }
    ></Cockpit>
     {persons}
     </div>

  )
}
}

export default App;

