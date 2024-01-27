import React from 'react';

const ToDoList = (props) => {
    return (
        <>
            <div className='todo_style'>
                <button className='btnDelete' 
                        onClick={ () => {
                            props.onSelect(props.id)
                        }}
                > X </button>
                <li> { props.listItem } </li>
            </div>
        </>
    )
}

export default ToDoList;
