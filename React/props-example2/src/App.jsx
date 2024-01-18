import React from "react";
import Card from "./Card";

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

const App = () => {
    return <CreateCard />
}

export default App;