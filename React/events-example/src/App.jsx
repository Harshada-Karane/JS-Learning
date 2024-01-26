import React, { useState } from "react";
import './App.css';

const App = () => {
    const defaultBg = '#8e44ad';
    const [bg, setBg] = useState(defaultBg);
    const onBtnClick = () => {
        setBg('#c2c2c2')
    }

    const onDblClick = () => {
        setBg("#8e44ad")
    }
    return (
        <div style={{ background : bg}}>
            <button onClick={ onBtnClick } onDoubleClick={ onDblClick }> Click Me</button>
        </div>
    )
}

export default App;