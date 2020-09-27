// N2KButton.jsx
console.log("Mounting N2KButton ... <N2KButton />");

import React from 'react';

import cx from 'classnames';
import { PropTypes } from 'prop-types';
import styles from './button.sass';

const COLORS = [
    'default', 'primary', 'danger', 'success'
];

const propTypes = {
    // define component info
    color: PropTypes.oneOf(COLORS),
    circle: PropTypes.bool,
};

const defaultProps = {
    // define custom props
    color: 'default',
    circle: 'false',
};

class N2KButton extends React.Component {
    
    _getClassNames() {
        // extract color and circle from this.props    
        const { color, circle, } = this.props;
        
        // define an empty object with two attributes
        let propClassNames = {};
        
        // a CSS class styles.default (resolved from styles[color] -see defaultProps) set to true
        propClassNames[styles[color]] = true;
        
        // a CSS class styles.circle, set to false by default (see defaultProps)
        propClassNames[styles.circle] = circle;
        
        return propClassNames;
    }
    
    render() {
        // className is not custom property; is the React props object's property
        const { className } = this.props;
        
        // return the component and pass three classnames, two from 
        // this._getClassNames (default & circle) and one from className (.save)
        // from button.sass, and gave the button element 3 styles.
        return (
            <div>
                <button 
                    className={cx(this._getClassNames(), className)}>
                    {this.props.color}
                </button>
            </div>
        )
    }
}


export default N2KButton;

// eof
