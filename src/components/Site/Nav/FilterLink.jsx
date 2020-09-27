// File: src/components/Site/Nav/FilterLink.jsx
// Desc: react router styled link
// Date: 8/12/2019
//...................................................................................
console.log( "Mounting Site/Nav/FilterLink.jsx... <FilterLink />" );

// React Router comes wih a <Link /> component to navigate around the application.
// 
// To add some styles, it has another special link called <NavLink /> component, 
// which accepts styling props. For instance, the activeStyle property allows to
// apply a style on the active state.
//
// Wrap the <NavLink /> as to container component <FilterLink /> to dynamically
// change the URL.
//...................................................................................

import React from 'react'
import { NavLink } from 'react-router-dom'


const FilterLink = ( {filter, children } ) => (
    <NavLink
        to={ filter === 'SHOW_ALL' ? '/' : `/${ filter }` }
        activeStyle={ {
            display: '',
            border: '1px solid lightgreen',
            padding: '6px',
            backgroundColor: '#000',
            color: 'white',
            fontSize: '1em',
            fontWeight: 'bold',
            textDecoration: 'none',
            
        }}
    >
        {children}
    </NavLink>                        
)

export default FilterLink


// eof 
