import { useState} from 'react'
import React from 'react';
import './LoveCount.css';

function LoveCount(){
    const [tclicks, setCount]=useState(0);
    function handleClick(){
      setCount(tclicks+1);
    }
    return (<div className='bigger-container'>
    <div className='love-container'>
    <h1 className='love-title'>Love Counter: </h1>
    <div className="love-count">{tclicks}</div>
    <Button value={"my Loved one"} onClick={handleClick}/>  
    <Button value={"God"} onClick={handleClick}/>
   
    </div>
      
    </div>
    )
  }
  function Button({value,onClick}){
    const [clicks, setCount]=useState(0);
  
    function indvClick(){
      setCount(clicks+1);
  
    }
    return(
      <button className='love-button' onClick={ () => {onClick();indvClick()}}>I loved {value}, {clicks} timess</button>
    )
  }
export default LoveCount;
