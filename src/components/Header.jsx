import React from 'react';

import './Header.css'

const Header = ({children}) => {
    return ( 
        <h2 title="Title">{children}</h2>
    );
}
 
export default Header;