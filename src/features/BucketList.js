import React, { useState } from "react";
import "./BucketList.css"
function BucketList(){
    const [count, change]=useState(4);
    function countup(){
      change(count+1);
    }
    function countdown(){
      
      change(count => {const newcount = count-1; if(newcount==0) alert("congrats");return newcount})
    }
    return(
      <div className="bucketlist-container">
      <h2 className="bucketlist-title">My Bucket List</h2>
      <p className="bucketlist-count">Items Left: {count}</p>
      <Element item="Food" countup={countup} countdown={countdown} />
      <Element item="Love" countup={countup} countdown={countdown} />
      <Element item="Study" countup={countup} countdown={countdown} />
      <Element item="Pray" countup={countup} countdown={countdown} />
    </div>
    )
  }

function Element(props){
  const [status, toggle]=useState(false);
  function togglef(){
    toggle(!status);
    if(!status){
      props.countdown();
    }
    else{
      props.countup();
    }
    
  }
  return(
    <button className="bucketlist-button" onClick={togglef}>{props.item} {status? "✅" : "⬜"}</button>
  )
}

  export default BucketList;