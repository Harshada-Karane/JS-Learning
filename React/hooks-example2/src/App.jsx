import React, { useState } from "react";
import './App.css'

const App = () => {
    let sCurrentTime = new Date().toLocaleTimeString();
    const [sTime, setCurrentTime] = useState(sCurrentTime)
    const onBtnClick = () => {
        sCurrentTime = new Date().toLocaleTimeString();
        setCurrentTime(sCurrentTime);
    }
   return (
       <div style={{textAlign : 'center'}}>
           <h1> {sTime} </h1>
           <button className="btn" onClick={onBtnClick}>Click Me</button>
       </div>
   )
}
export default App;