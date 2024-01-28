import React, { useState } from 'react';
import './App.css';
import List from './List';

const App = () => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const onInputChange = (oEvent) => {
        setItem(oEvent.target.value)
    }

    const onBtnClick = () => {
        setItemList((oldItems) => {
            return ([...oldItems, item])
        });
        setItem("");
    }

    const onBtnDelete = (id) => {
        setItemList((oldItems) => {
            //console.log(oldItems);
            const filteredArr =  oldItems.filter((item, i) => {
                return i !== id;
            })
            return filteredArr
        })
    }
  return (
    <>
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>ToDo List</h1>
                <input onChange={onInputChange} value={item}/>
                <button className='btnAdd' onClick={onBtnClick}> + </button>
                <ol>
                    {
                        itemList.map((item, index) => {
                            return <List key={index} id={index} text={item} onDelete={onBtnDelete}/>
                        })
                    }
                </ol>
            </div>
        </div>
    </>
  )
}

export default App;
