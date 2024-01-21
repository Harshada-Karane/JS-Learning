import React from "react";
import Card from "./Card";
const time = 10;
const CreateCard = () => {
    const sTime = 20;
    if(sTime < 12){
        return <Card text="Good Morning"/>
    } else if (sTime > 12 && sTime < 16){
        return <Card text="Good Afternoon"/>
    } else {
        return <Card text="Good Evening"/>
    }
} 

const App = () => (
    <>
        <CreateCard />
        <h1>{ time < 12 ? "Good Morning" : "Good Evening"}</h1>
    </>
);


export default App;