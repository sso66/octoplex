// File: src/components/RandomButton/N2KRand.jsx
// Desc: Math Random Generator Component
// Date: 10/10/2019
//..............................................................................
console.log( "Mounting N2KRand.jsx... <N2KRand />")

import React from 'react';
import './n2k-rand.sass'


// 1. Random Number returns a pseudo-random number between 0 (inclusive),
//    meanign it might return 0) and 1 (exclusive, meaningit can't actually 
//    return 1).
//..............................................................................
const getRandom = () => {
    //return Math.floor(Math.random());
    //return Math.ceil(Math.random());
    return Math.random();
}


// 2. Random Number Between 0 and <Max> 
//..............................................................................
const getRandomUpTo = (max) => {
    return Math.random() * max;
}    
    
    
// 3. Random Number Between <Min> and <Max>
//..............................................................................
const getRandomBetween = (min, max) => {
    return min + Math.random() * (max - min)
}

    
// 4. Random Integer Between <Min> and <Max>
//..............................................................................
const getRandomIntegerBetween = (min, max) => {
    return getRandomBetween(min, max);
}    


// 5. Random Element of Array
//..............................................................................
const getRandomFromArray = (arr) => {
   return arr[Math.floor(getRandomUpTo(arr.length))];    
}

           
class N2KRand extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            currentValue: 0,
            min: 0,
            max: 6,
            step: 1
        }
        this.getRandomUpTo = this.getRandomUpTo.bind(this);
    }

    getRandomUpTo(evt) {
        let max = evt.target.value;
        
        this.setState({ min: Math.floor(Math.random() * max) });      
    }       
    
    render() {        
        return (
            <div className="n2k-random">
                <div className="random-number">{ this.state.min }</div>
                <button 
                    type="button"
                    className="generate-number-btn"
                    value={ this.state.max }
                    onClick={this.getRandomUpTo}
                >
                    Generate Random Number
                </button>
                {/* 
                <ol style={{ listStyleType: "lower-alpha" }}>
                    <li>{ getRandom().toFixed(2) }</li>
                    <li>{ getRandomUpTo(10) }</li>
                    <li>{ getRandomBetween(1.00, 10.00) }</li>
                    <li>{ getRandomIntegerBetween(1, 10) }</li>
                    <li>{ getRandomFromArray([10, 6, 1000, 52.0, 100]) }</li>
                </ol>
                */}
            </div>        
        )
    }             
}
export default N2KRand;