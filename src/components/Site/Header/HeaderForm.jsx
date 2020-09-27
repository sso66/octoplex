// Header.js
console.log("Mounting Header.js... <Header />");

import React from 'react';
import SearchForm from './SearchFormWithSubmit'

class Header extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            searchVisible: false
        }
    
        this.handleSearch = this.handleSearch.bind(this);
  }


    // toggle visibility when run on the state
    handleSearch() {
        this.setState({
            searchVisible: !this.state.searchVisible
        })
    }

    render() {
        // CSS classes to add to the <input /> element
        let searchInputClasses = [ "searchInput" ];

        // update the class array if the state is visible
        if ( this.state.searchVisible ) {
            searchInputClasses.push( "on" );
        }

        return (
            <header> 
                <div className="header">
                    <div className="menuIcon">
                        <div className="dashTop"></div>
                        <div className="dashBottom"></div>
                        <div className="circle"></div>
                    </div>
    
                    <span className="title">
                        { this.props.title }
                    </span>
    
                    <SearchForm
                        searchVisible={ this.state.searchVisible }
                        onSubmit={ this.props.onSubmit } 
                    />
        
                    {/* Adding an onClick handler to call the handleSearch button */}
                    <div
                        onClick={ this.handleSearch }
                        className="fa fa-search searchIcon"/>
                </div>      
            </header>
        )
    }
}

export default Header;

// eof 
