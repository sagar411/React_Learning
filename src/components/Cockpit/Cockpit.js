import React from "react";
import Style from './Cockpit.module.css';

const Cockpit=(props)=>{

    const classes =[];
    let btnClass = '';
    btnClass = Style.Red;

    if(props.showPerson){
        btnClass = Style.Red;
    }

if(props.persons.length<=2){
  classes.push(Style.red);
}
if(props.persons.length<=1){
  classes.push(Style.bold);
}

    return(
        <div className={Style.Cockpit}>
        <h1>i am react {props.appName}</h1>
        <p className={classes.join(' ')} >This is react app</p>
        <button 
        className={btnClass }
        onClick={props.clicked}>click me</button>
  </div>

    );
    
}
export default Cockpit ;