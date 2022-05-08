import React from 'react';

import './TodoSearch.css';

export const TodoSearch = ({searchValue, setSearchValue, loading}) => {

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
      disabled={loading}//Para que el buscador de TODO esté deshabilitado cuando loading sea true
      />
    </>

  )
}
