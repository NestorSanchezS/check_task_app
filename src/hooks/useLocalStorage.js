import { useEffect, useState } from 'react'

export const useLocalStorage = (itemName, initialValue) => {
  
  const [sincronizedItem, setSincronizedItem] = useState(true);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
    try {
      
        const localStorageItem = localStorage.getItem(itemName);   
        let parsedItem;
    
        //Aqui verifcamos si el usuario ya tiene alguna version guardada en el localStorage
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))//Si no existe nada este liena crea la primera version sin nada(por ello esta el array vacio)
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);//Este extrae si hay algo guardado
        }
  
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      
    } catch (error) {
      setError(error);
    }
  }, 3000);
  }, [sincronizedItem]);
  

      
    //Este es un "puente" entre  dleteTodo y completeTodo con localStorage para guardar la informacion
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };

    const sincronize = () => {
      setLoading(true);
      setSincronizedItem(false);
    }

    return {
      item,
      saveItem,
      loading,
      error,
      sincronize
    };
      
  
}
