// src/redux/reducers/counter.js
console.log( "Mounting reducers/counter.js..." );


export const initialState = {
    
    count: 0,  
     
};

//export default function counter( state = 0, action ) {
export default function counter( state = initialState.count, action ) {
//export default function counter( state = initialState, action ) {
    
    switch ( action.type ) {
        case 'INCREMENT':
            //return state + 1
            return state.count + 1
        
        case 'DECREMENT':
            //return state - 1
            return state.count - 1
    
        default:
            return state
    }
    
}

// eof
