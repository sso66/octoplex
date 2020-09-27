// File: src/components/Site/Footer/Footer.jsx
// Desc:
// Date: 8/1/2019
console.log( "Mounting Footer.jsx... <Footer />" );

import React from 'react';
import FilterLink from '../Nav/FilterLink'

const Footer = (props) => (
    <div className="content has-text-centered">
        <footer>
            <div className="box">
                <span><i className="fa fa-anchor">&nbsp;|&nbsp;&nbsp;</i></span>
                <span><i className="fa fa-address-book">&nbsp;|&nbsp;&nbsp;</i></span>
                <span><i className="fa fa-compass">&nbsp;|&nbsp;&nbsp;</i></span>
                <span><i className="fa fa-bluetooth">&nbsp;&nbsp;</i></span>
            </div>
            <p className="filter-link">Show: 
                {' '}
                <FilterLink filter="">
                    ALL
                </FilterLink>
                    {' | '}
                <FilterLink filter="">
                    ACTIVE
                </FilterLink>
                    {' | '}
                <FilterLink filter="">
                    COMPLETED
                </FilterLink>
            </p>
        </footer>
    </div>
        
);

export default Footer;

// eof 