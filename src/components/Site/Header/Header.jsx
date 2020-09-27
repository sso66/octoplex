// File: src/components/Site/Header/Header.jsx
// Desc:
// Date: 8/1/2019
console.log( "Mounting Header.jsx... <Header />" );

import React from 'react';
import PropTypes from 'prop-types';
import MenuButton from './MenuButton';

class Header extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            searchVisible: false
        }
        
        this.handleSearch = this.handleSearch.bind( this );
    }
        
    // toggle visibility when run on the state
    handleSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }

    render() {
        // add CSS classes to the <input /> element
        let searchInputClasses = [ "searchInput" ];

        // update the class array if the state is visible
        if ( this.state.searchVisible ) {
            searchInputClasses.push( "active on" );
        }

        return (
            <header className="header">
                {/*
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>
                */}
                <MenuButton />
                
                <span className="title">
                    { this.props.title }
                </span>
            
                <input
                    type="text"
                    className={ searchInputClasses.join( ' ' ) }
                    placeholder="Search ..." 
                />
            
                {/*  add onClick handler to call the handleSearch action */}
                <div
                    //onClick={ this.handleSearch.bind( this ) }
                    onClick={ this.handleSearch }
                    className="fa fa-search searchIcon">
                </div>
            </header>
        );
    }
}

Header.propTypeTypes = {
  title: PropTypes.node,
}

export default Header;

// eof
