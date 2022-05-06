import React from 'react';
import { TodoContext } from '../TodoContext';

import './TodoCounter.css';

export const TodoCounter = () => {

  const {completedTodos,totalTodos} = React.useContext(TodoContext)

  return (
    <div className="todocounter">
        <h1 className="todocounter__title-h1">Your Task</h1>
        <h2 className="todocounter__title-h2"> completed {completedTodos} of {totalTodos} </h2>
    </div>
  )
}
