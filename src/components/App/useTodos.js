import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //hook para escribir en el seaRch
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // const [openModalAlert, setOpenModalAlert] = useState(false);

  //filtra a todos los items que estan completados (que esten chekiados)
  const completedTodos = todos.filter((todos) => !!todos.completed).length;

  const totalTodos = todos.length;

  //Para buscar los items en el search
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    //Si no hay un valor mayor a uno os muestra
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((item) => {
      const todoText = item.text.toLowerCase(); //Para que encuentre no importa si esta en mayuscula o minuscula pero como (toLowerCase convierte a minuscula)
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  //Encontramos el index del text y al chekiar se de true
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((item) => item.text === text);
    const newTodos = [...todos]; //Se crea una lista y se agrega con spreat opereitor
    newTodos[todoIndex].completed = true; //Se encunetra con el index y pone el completed en true
    saveTodos(newTodos); //Y con la funcion del hook se actuliza el nuevo valor
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((item) => item.text === text);
    const newTodos = [...todos]; //Se crea una lista y se agrega con spreat opereitor
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //Y con la funcion del hook se actuliza el nuevo valor
  };

  const state = {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  };

  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  };

  return { state, stateUpdaters };
};
