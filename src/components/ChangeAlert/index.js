import React from "react";
import { useStorageListener } from "../../hooks/useStorageListener";

// import './ChangeAlert.css';

export const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (show) {
    return (
      <div className="container_changeAlert">
        <p className="changeAlert_p">Hubo cambios</p>
        <button className="changeAlert_button" onClick={toggleShow}>
          Refresh
        </button>
      </div>
    );
  } else {
    return null;
  }
};
