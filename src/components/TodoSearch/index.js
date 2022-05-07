import React from 'react';

import './TodoSearch.css';

export const TodoSearch = ({searchValue, setSearchValue}) => {

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
