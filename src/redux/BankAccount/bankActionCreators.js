// src/redux/BankAccount/bankActionCreators.js
console.log( "Mounting bankActionCreators.js..." );

import types from './types';

const bankActionCreators = {
    
    depositIntoAccount( amount ) {
        return {
            type: types.DEPOSIT_INTO_ACCOUNT,
            amount: amount
        }
    },
    
    withdrawFromAccount( amount ) {
        return {
            type: types.WITHDRAW_FROM_ACCOUNT,
            amount: amount
        }
    },

    toggleExchange() {
        return {
            type: types.TOGGLE_EXCHANGE,
        }
    }
}

export default bankActionCreators;

// eof
