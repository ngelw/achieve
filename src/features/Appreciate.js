import React from "react";
import {useState} from "react";
import "./Appreciate.css"
function Appreciate(){
    const [text, change] =useState('');
    function callback(e){
      e.preventDefault();
      change(e.target.elements[0].value)
      // change(e.target.value)
    }
    function reset(e){
      e.preventDefault();
      change('');
    }
   
    return(
      <div className="appreciate-container">
      <form onSubmit={callback}>
      <input className="appreciate-input" placeholder={'Write something for your loved one..'}></input>
      <button className="appreciate-button" type='submit'>submit</button>
      <p>You wrote:</p> 
        <p className="appreciate-text">{text}</p>
        <button className="reset-button" onClick={reset}>Reset</button>
      </form>
      </div>
    )
  }
  export default Appreciate;