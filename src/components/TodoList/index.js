import React from 'react'


import './TodoList.css'

export const TodoList = ({
  error, 
  onError, 
  loading, 
  onLoading, 
  onEmptyTodo,
  searchedTodos,
  totalTodos, 
  onEmptySearchResults,
  searchValue,
  render,
  children
}) => {
   
  const renderFun = children || render;

  return (
    <section>
      
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !totalTodos) && onEmptyTodo()}
        {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchValue)}

        {(!loading && !error) && searchedTodos.map(renderFun)}
      
      
    </section>
 
  )
}
