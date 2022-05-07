import React, { useState } from 'react';

import './TodoForm.css';

export const TodoForm = ({addTodo, setOpenModal}) => {

    const [newTodoValue, setNewTodoValue] = useState('');


    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };


  return (
    <form onSubmit={onSubmit}>
        <label className="label_title">Write Your new TODO</label>
        <textarea
            value = {newTodoValue}
            onChange={onChange}
            placeholder="Your new task is..."
        />
        <div className="buttons">
            <button
            className="btn btn-primary"
            type="button"
            onClick={onCancel}
            >
                Cancel
            </button>

            <button
            className="btn btn-secundary"
            type="submit"
            >
                Add
            </button>
        </div>
    </form>
  )
}
