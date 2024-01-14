import React from "react";
import Card from "./Card";
import data from "./Data";

function createCard(val){
    return (
        <Card name={val.name} 
            imageSrc={val.imageSrc} 
            link={val.link} />
    );
}

function App(){
    return (
        <>
            <h2 className="title">Amazon Prime Series</h2>
            {/* <Card name={data[0].name} 
                  imageSrc={data[0].imageSrc} 
                  link={data[0].link} />
            <Card name={data[1].name} 
                  imageSrc={data[1].imageSrc} 
                  link={data[1].link}/>
            <Card name={data[2].name} 
                  imageSrc={data[2].imageSrc} 
                  link={data[2].link} />  */}

            {data.map(createCard)}      
        </>
    )
}

export default App;