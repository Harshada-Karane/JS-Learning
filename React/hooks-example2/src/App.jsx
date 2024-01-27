import React, { useState } from "react";
import './App.css'

const App = () => {
    let sCurrentTime = new Date().toLocaleTimeString("en-US");
    const [sTime, setCurrentTime] = useState(sCurrentTime);
    
    const onBtnClick = () => {
        sCurrentTime = new Date().toLocaleTimeString("en-US");
        setCurrentTime(sCurrentTime);
    }

    //let t = new Date().toLocaleTimeString("en-US");
    const [sTimeString, setTimeString] = useState(sCurrentTime)
    const updateTime = () => {
        sCurrentTime = new Date().toLocaleTimeString("en-US");
        setTimeString(sCurrentTime);
    }
    setInterval(updateTime, 1000);
   return (
       <div style={{textAlign : 'center'}}>
           <h1> {sTime} </h1>
           <button className="btn" onClick={onBtnClick}>Click Me</button>
            <hr />
            <h1> {sTimeString} </h1>

       </div>
   )
}
export default App;