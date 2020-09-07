import React from 'react';

import './styles.css';

export function TextField({ placeholder, icon, iconFunction }) {
  return (
    <div className="text-field">
      <input
        className="input"
        placeholder={ placeholder }
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
