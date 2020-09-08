import React from 'react';

import './styles.css';

export function TextField({ value, change, placeholder, icon, iconFunction }) {
  function handleEnterKeyPress( event ) {
    if ( event.keyCode === 13) {
      iconFunction();
    }
  };

  return (
    <div className="text-field">
      <input
        className="input"
        placeholder={ placeholder }
        value={ value }
        onChange={ change }
        onKeyUp={ handleEnterKeyPress }
      />

      {
        icon
          ? <div
              onClick={ iconFunction }
              className="icon-button"
            >
              { icon }
            </div>
          : <></>
      }
    </div>
  );
};
