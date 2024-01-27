import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

const App = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const onBtnClick = () => {
    setItemList((oldItems) => {
      return [...oldItems, item]
    });
    setItem("");
  }

  const onInputChange = (oEvent) => {
    setItem(oEvent.target.value)
  }

  const deleteItem = (id) => {
    setItemList((oldItems) => {
      return oldItems.filter((elm, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
      <div className='main_div'>  
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input placeholder='Add items' onChange={onInputChange} value={item}/>
          <button className='btnAdd' onClick={onBtnClick}> + </button>
          <ol>
            {
              itemList.map((item, i) => {
                return <ToDoList key={i} id={i} listItem={item} onSelect={deleteItem}/>
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}


export default App;