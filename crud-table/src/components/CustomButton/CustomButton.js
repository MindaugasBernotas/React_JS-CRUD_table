import React from 'react';
import './CustomButton.css';

const CustomButton = ({
   label,
   type,
   disabled = false,
   handleClick,
   classNames,
   data
}) => {
   return (
      <button
         className={classNames}
         onClick={() => handleClick(data)}
         type={type}
         disabled={disabled}
      >
         {label}
      </button>
   )
}

export default CustomButton;