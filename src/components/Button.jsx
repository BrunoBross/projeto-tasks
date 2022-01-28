import React from 'react';
import "./Button.css"

const Button = ({children, onClick, colorChange, backgroundColorChange}) => {
    return ( 
        <button onClick={onClick} className="button" style={{color:colorChange, backgroundColor:backgroundColorChange}}>
            {children}
        </button>
    );
}
 
export default Button;