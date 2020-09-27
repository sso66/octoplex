// src/redux/BankAccount/types.js
console.log( "Mounting BankAccount types.js..." );

//..............................................................................................
// Since all actions should have unique names ("types" to be precise), and those names will 
// be referenced across the app, we will store them as constants. Note that it's not mandatory 
// nor it's a Redux requirements but rather a good practice to use everytime you need to 
// provide uniquely identifiable names across the application.
//
// Get started by defining three constants to uniquely identify our actions across the app for 
// creating an account, depositing in the account, and withdrawing from the account actions.
// At last, add toggle action to show and hide dollar exchange rates in Euro, British Pound
// and Japanese Yen.
//..............................................................................................


export default {
  CREATE_ACCOUNT: 'create account',
  WITHDRAW_FROM_ACCOUNT: 'withdraw from account',
  DEPOSIT_INTO_ACCOUNT: 'deposit into account',
  
  TOGGLE_EXCHANGE: 'toggle exchange',
};

// eof
