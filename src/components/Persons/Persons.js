import React from 'react';
import Person from './Person/Person'; 

const persons =(props)=>{
console.log('[Person.js] rendering...');
return props.persons.map((mans,index)=>{
  
  return( <Person 
    click={()=>props.clicked(index)}
    name ={mans.name} 
    age={mans.age}
    key={mans.id}
    change={(event)=>props.changed(event,mans.id)}

    > </Person>
    );
  });
};

export default persons;
