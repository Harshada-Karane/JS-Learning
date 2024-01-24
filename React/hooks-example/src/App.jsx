import React, { useState } from "react";
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);
    const onButtonClick = () => {
        setCount(count + 1);
    }
    return (
        <div style={ {textAlign : 'center'} }>
            <h1>{count}</h1>
            <button className="btn" onClick={onButtonClick}> Click Me</button>
        </div>
    )
}

export default App;