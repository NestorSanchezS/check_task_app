import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';;
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { useTodos } from './useTodo';


// import './App.css';

export const App = () => {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
          <TodoHeader/>

          <TodoCounter
          totalTodos = {totalTodos}
          completedTodos = {completedTodos}
          />
        
        <TodoSearch
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
        

          <TodoList>
            {loading && <TodoLoading />}
            {error && <TodoError error={error} /> }
            {(!loading && !searchedTodos.length) && <EmptyTodo />}
    
            {searchedTodos.map(item =>(
            <TodoItem 
            key= {item.text} 
            text={item.text}
            completed={item.completed}
            onComplete={() => completeTodo(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
          ))}
          </TodoList>
  
        {!!openModal && (
          <Modal>
            <TodoForm 
              addTodo ={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal = {setOpenModal}
          openModal = {openModal}
        />
      
    </>
  )
}
