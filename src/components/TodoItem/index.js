import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiCheckCircle } from 'react-icons/fi';

import  './TodoItem.css'



export const TodoItem = ({completed, onComplete,text, onDelete}) => {
  
 
  return ( 
    <li className="TodoItem">
        <span 
        className={`Icon Icon__check ${completed && 'Icon__check--active'}`}
        onClick={onComplete}
        >
        <FiCheckCircle />
        </span>

        <p className={`TodoItem__p ${completed && 'TodoItem__p--complete'}`}>
          {text}
        </p>

        <span 
        className="Icon Icon__delete"
        onClick={onDelete}
        >
        <RiDeleteBin5Line />
        </span>
    </li>
  )
}
