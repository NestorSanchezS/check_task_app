import { useEffect, useReducer, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const { sincronizedItem, error, loading, item } = state;

  //ACTION CREATORS
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });

  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });

  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

  const onSincronize = () => dispatch({ type: actionTypes.sincronize });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        //Aqui verifcamos si el usuario ya tiene alguna version guardada en el localStorage
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //Si no existe nada este liena crea la primera version sin nada(por ello esta el array vacio)
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem); //Este extrae si hay algo guardado
        }

        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  //Este es un "puente" entre  dleteTodo y completeTodo con localStorage para guardar la informacion
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
      // setItem(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
};

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: false,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

// const reducer = (state, action) => {(

// )}
