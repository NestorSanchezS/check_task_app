import React from 'react'
import { useStorageListener } from '../../hooks/useStorageListener';

export const ChangeAlert = ({sincronize}) => {

const {show, toggleShow} = useStorageListener(sincronize);

    if(show){
        return (
            <div>
                <p>Hubo cambios</p>
                <button
                    onClick={toggleShow}
                >Refresh</button>
            </div>
        );
    }else {
       return null;
    }
  
}
