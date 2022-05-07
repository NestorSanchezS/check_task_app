import React from 'react';

import './TodoCounter.css';

export const TodoCounter = ({completedTodos, totalTodos}) => {

  return (
    <div className="todocounter">
        <h1 className="todocounter__title-h1">Your Task</h1>
        <h2 className="todocounter__title-h2"> completed {completedTodos} of {totalTodos} </h2>
    </div>
  )
}
