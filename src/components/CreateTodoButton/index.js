import React from 'react';
import { TodoContext } from '../TodoContext';

import './CreateTodoButton.css';

export const CreateTodoButton = () => {

  const {openModal, setOpenModal} = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(!openModal);
  } 

  return (
    <>
        <button 
        className="createtodobutton"
        onClick={onClickButton}
        >
        +
        </button>
    </>
  )
}
