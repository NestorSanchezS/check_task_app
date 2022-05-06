import React from 'react';
import { TodoContext } from '../TodoContext';

import './TodoSearch.css';

export const TodoSearch = () => {

  const {searchValue, setSearchValue} =React.useContext(TodoContext)
  
  const onSearchChange = (e) => {
  setSearchValue(e.target.value);
}

  return (
    <>
      <input 
      className="todosearch" 
      placeholder="Search your task"
      value={searchValue}
      onChange={onSearchChange}
      />
    </>

  )
}
