import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';


// import './App.css';

export const AppIU = () => {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <>
        <TodoCounter/>
        
        <TodoSearch />


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
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal = {setOpenModal}
        />
      
    </>
  )
}
