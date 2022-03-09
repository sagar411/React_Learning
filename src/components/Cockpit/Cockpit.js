import React,{useEffect} from "react";
import Style from './Cockpit.module.css';

const Cockpit=(props)=>{


  useEffect(()=>{
    console.log(["Cockpit.js useEffect"]);

    setTimeout(()=>{
      alert('save Data to cloud')
    },1000);
    
  return ()=>{
      console.log("[cockpit.js cleanup]")
  }
  },[]
  //if we pass empty array it will change just once for first time.
  //in component did mount we use it

  );

  useEffect(()=>{
console.log("[2nd tie clean up]");

  })

    const classes =[];
    let btnClass = '';
    btnClass = Style.Red;

    if(props.showPerson){
        btnClass = Style.Red;
    }

if(props.personsLength<=2){
  classes.push(Style.red);
}
if(props.personsLength<=1){
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
export default React.memo(Cockpit) ;