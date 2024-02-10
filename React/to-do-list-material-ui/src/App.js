import React from "react";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/Add';
import './App.css';
import { useState } from "react";
import ItemComponent from "./ItemComponent";
const App = () => {
  const [item, setItem] = useState("");
  const [newItem, setItems] = useState([])

  const onInputChange = (oEvent) => {
    setItem(oEvent.target.value)
  }

  const onBtnClick = () => {
    if(item !== ""){
      setItems((oldItems) => {
        return [...oldItems, item]
      })
      setItem("")
    }
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>To-Do List</h1>
        <input type="text" value={item} onChange={onInputChange} placeholder="Add Item"/>
        <IconButton onClick={onBtnClick} color="primary"><AddCircleIcon /></IconButton>
        <ol>
          {
            newItem.map((elm, i) => {
              return <ItemComponent key={i} item={elm} />
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default App;