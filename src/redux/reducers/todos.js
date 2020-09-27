// src/redux/reducers/todos.js
console.log( "Mounting reducers/todos.js..." );


export const initialState = {

    todo: [],

};

//export default function todos( state = [], action ) {
//export default function todos( state = initialState.todo, action ) {
export default function todos( state = initialState, action ) {    
    
    switch (action.type) {
        
        case 'ADD_TODO':
            //return state.concat([action.text])
            return state.todo.concat([action.text])
            
        default:
            return state
    }
    
}

// eof