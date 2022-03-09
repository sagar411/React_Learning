import Style  from './App.module.css'
import Persons from '../components/Persons/Persons';
import React, { PureComponent } from "react";
import Cockpit from '../components/Cockpit/Cockpit'



class App extends PureComponent {
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
  showPerson :false,
  showCockpit:true
    
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
// componentDidUpdate(){
//   console.log['App.js componentDidUpdate']
// }

// shouldComponentUpdate(nextProps,nextState){
//   console.log(["app.js componentDidUpdate"]);
//   if(nextProps.persons !== this.state.persons|| nextProps.changed !== this.state.changed || nextProps.clicked !==this.state.clicked){
//     return true;
//   }else{
//     return false;
//   }
 
// }
componentDidUpdate(){
  console.log(['App.js componentDidUpdate']);
}


  //  changeHandler=(newName)=>{
  //   this.setState({
  //     persons:[
  //       {name:newName, age:"32"},
  //       {name:"sagar",age:"25"},
  //       {name:"Sanjay", age:"28"}
  //     ]
  //   });

  // }

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
      <button onClick={()=>{this.setState({showCockpit:false})}} >Remove Cockpit</button>
     
    { this.state.showCockpit ?<Cockpit 
      appName={this.props.title}
     showPerson ={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked ={this.toggleHandler }
    ></Cockpit>
    
    :null  
    
    }
    
     {persons}
     </div>
     

  )
}
}

export default App;

