// SearchFormWithSubmit.js
console.log("Mounting SearchFormWidthSubmit.jsx... <SearchFormWithSubmit />");

import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const currentValue = e.target.value;
        this.setState({
            searchText: currentValue
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const {searchText} = this.state;
        this.props.onSubmit(searchText);
    }

    render() {
        const {searchVisible} = this.props;
        let searchClasses = ['searchInput'];
        
        if (searchVisible) {
            searchClasses.push('active');
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="search"
                    className={searchClasses.join(' ')}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Search ..."
                />
            </form>
        );
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchVisible: PropTypes.bool
    
}

SearchForm.defaultProps = {
    onSubmit: () => {},
    searchVisible: false
}

export default SearchForm;

// eof 
