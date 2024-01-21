import React from "react";
import SlotMachine from "./SlotMachine";
import './App.css'



const App = () => {
    return (
        <>
            <h1 className="heading"> 🎰 Welcome to Slot Machine Game 🎰 </h1>
            <div className="slotmachine">
                <SlotMachine x = ' 😄 ' y = ' 😄 ' z = ' 😄 '/>
                <SlotMachine x = ' 😄 ' y = ' 🎅 ' z = ' 😄 '/>
                <SlotMachine x = ' 🥰 ' y = ' 🥰 ' z = ' 🥰 '/>
                <SlotMachine x = ' 😸 ' y = ' 😈 ' z = ' 🥰 ' />
            </div>
        </>
    );
}

export default App;