// File: src/redux/actionCreators.js
// Desc: create common action creators for React + Redux application
// Date: 8/1/2019
console.log( "Mounting redux/actionCreators.js..." );

 // "waitress": INVOKER
 //........................................
 import types from './actionTypes';


//const host = "http//localhost:8080"

 export const actionCreators = {
     
    fetchNewTime: () => ({    
        type: types.FETCH_NEW_TIME,
        payload: new Date()
    }),

    // Async call
    // fetchNewTime: ( { timezone = 'pst', string='now' } ) => ({    
        // type: types.FETCH_NEW_TIME,
        // payload: new Date()
        // meta: {
            // type: 'api',
            // url: host + '/'
        // } 
    // }),

     login: ( user ) => ({
         type: types.LOGIN,
         payload: user
     }),
     
     logout: () => ({
         type: types.LOGOUT
     }) 
 }
 
// eof
