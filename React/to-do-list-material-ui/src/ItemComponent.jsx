import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { IconButton } from '@mui/material';

const ItemComponent = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const onDelete = () => {
    setIsDelete(true)
  }
  return (
    <div className='todo_style'>
      <IconButton color='primary' onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
      
      <li style={{textDecoration : isDelete ? "line-through" : "none"}}>{props.item}</li>
    </div>
  )
}

export default ItemComponent;