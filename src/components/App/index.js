import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppIU } from './AppIU';

//  const  defaultTodos = [
//     {text: 'Configure VPN', completed: false},
//     {text:'Build FTTH networks', completed: true},
//     {text: 'Set up new Mikrotik', completed: false}
//   ];

// const [configVPN, networkFTTH, mikrotik] = todos;



export const App = () => {

  return (
    <TodoProvider>
      <AppIU />
    </TodoProvider>
  )
}
