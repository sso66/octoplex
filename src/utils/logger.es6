// logger.es6
console.log( "Mounting logger.es6... <Root />" );

'use strict';

let FIRST_NAME = 'Stephen';
let LAST_NAME = 'Oo';

let checkName = ( firstName, lastName ) => {

  if ( firstName !== FIRST_NAME || lastName !== LAST_NAME ) {

    console.log( 'user: ' + firstName + ' ' + lastName + ' : You\'re not AUTHORIZED for admin access!' );

  } else {

    console.log( 'user: ' + firstName + ' ' + lastName + ' : You\'re AUTHORIZED for admin access.' );

  }

};

checkName( 'Stephen', 'Oo' );
checkName( 'Frank', 'Emnett' );

// eof
