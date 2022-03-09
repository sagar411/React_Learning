import React,{Component} from 'react';
import Person from './Person/Person'; 

class Persons extends Component{
  // static getDerivedStateFromProps(props,state){
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
    
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapShotBeforeUpdate');
    return {message:'hello'};
  }
  componentDidUpdate(prevProps,prevState,snapShot){
    console.log('[Persons.js] componentdIupdate' );
    console.log(snapShot);
  }
//cleanup work 
  componentWillUnmount(){
    console.log("[Person.js componentWillUnmount]");

  }

  render(){
console.log('[Person.js] rendering...');
return this.props.persons.map((mans,index)=>{
  
  return( <Person 
    click={()=>this.props.clicked(index)}
    name ={mans.name} 
    age={mans.age}
    key={mans.id}
    change={(event)=>this.props.changed(event,mans.id)}

    > </Person>
    );
  });
};
};

export default Persons;
