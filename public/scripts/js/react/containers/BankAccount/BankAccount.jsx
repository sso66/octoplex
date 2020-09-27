// src/containers/BankAccount/BankAccount.jsx: 
console.log("Mounting BankAccount.js... <BankAccount />");

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bankActionCreators from '../../redux/BankAccount/bankActionCreators';
//import '../../redux/BankAccount/bank-account.sass';


class BankAccount extends Component {
//..............................................................................................
// Presentational component that will receive the bank balance (state) and the callbacks to 
// deposit and withdraw via props and simply mount the interface to show the balance, the text 
// field and buttons.
    
// One quick question. Is it better to provide a constructor function to properly initialize 
// the 'props' (Strategy Design Pattern) object, also allow to have a local state (State 
// Design Pattern) object to cache Redux stores' state (global) object?  The may also have 
// impact on the event binding onDeposit and onWithdraw triggers, as well!  
//..............................................................................................
    handleDeposit() {
        this.props.onDeposit( this.refs.amount.value );
        this.refs.amount.value = '';
    }

    handleWithdraw() {
        this.props.onWithdraw( this.refs.amount.value );
        this.refs.amount.value = '';
    }
  
    render() {
        
        return (
            <div className="bank-account">
                <div className="bank-logo">
                    <img src="//www.pro-react.com/logos/redux-bank.svg" width="150" />ReduxBank
                </div>
                <h1 className="account-balance">Your balance is ${ ( this.props.balance ).toFixed(2) }</h1>
                  
                <div className="atm">
                    <input type="text" placeholder="Enter Amount" ref="amount" />
                    <button className="button is-warning" onClick={ this.handleWithdraw.bind( this ) }>Withdraw</button>
                    <button className="button is-info" onClick={ this.handleDeposit.bind( this ) }>Deposit</button>
                </div>
                
                <div className="exchange" onClick={ this.props.onToggle }>
                    <h3>Exchange Rates:</h3>
                    <div className={ this.props.showExchange ? 'exchange--show' : 'exchange--hide' }>
                        <div className="app">$1 USD =
                        <div>----------------</div>
                        <div className="rate">0.9990 EUR</div>
                        <div className="rate">0.7989 GBP</div>
                        <div className="rate">710.15 JPY</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

BankAccount.propTypes = {
    //..............................................................................................
    // Notice presentational component expects to receive three props from the parent container 
    // component: balance (the balance state of the store), onDeposit and onWithdraw (callbacks 
    // that it calls passing amount typed by the user).  In addition PD propType, it also expect
    // one UI propType namely onToggle.
    //..............................................................................................
    balance: PropTypes.number,
    onDeposit: PropTypes.func,
    onWithdraw: PropTypes.func,
    onToggle: PropTypes.func,       
};

/*
export class BankAccountContainer extends Component {
//..............................................................................................
// Container component will have direct access to the application store and will pass down 
// props to presentational component.
//
// It has two main (KVC/KVO paradigm) responsibilities:
//
// 1. Map state to props: The container component will get state value from the store (only 
//    the necessary ones - the balance in this case) and pass it down to presentational 
//    component via props. In other words, it will map certain state keys to props.

// 2. Map dispatch to props: In similar fashion, the container component will pass down some 
//    callbacks that ultimately will end up dispatching actions. Therefore, need to write 
//    methods that will dispatch actions and map them to props.
//..............................................................................................
    // Note that the whole constructor function need to be refactored out for Redux INIT action.
    /* 
    constructor( ...args ) {
        
        super( ...args );
        
        bankStore.dispatch( { type:types.CREATE_ACCOUNT } );
        
        this.state = {
            balance: bankStore.getState().balance
        };
    }
    */
    /*
    componentDidMount() {
        this.unsubscribe = bankStore.subscribe( () =>
            this.setState( { balance: bankStore.getState().balance } )
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
  
    render() {
               
        return (
            <BankAccount
                balance={ bankStore.getState().balance }
                // onDeposit = { ( amount ) => bankStore.dispatch( { type:types.DEPOSIT_INTO_ACCOUNT, amount:amount } ) } 
                // onWithdraw = { ( amount ) => bankStore.dispatch( { type:types.WITHDRAW_FROM_ACCOUNT, amount:amount})} 

                onDeposit = { ( amount ) => bankStore.dispatch( bankActionCreators.depositIntoAccount( amount ) ) } 
                onWithdraw = { ( amount ) => bankStore.dispatch( bankActionCreators.withdrawFromAccount(amount) ) }
            />
        )
    }    
}
export default BankAccountContainer;
*/

// Code Review in parts on manual state management operations:
//..............................................................................................
// In the class constructor you dispatch the "CREATE_ACCOUNT" action and define the local state 
// containing a balance key.
//
// The value of the key comes from the bankStore (bankStore.getState().balance).
//
// In the sequence, you use the lifecycle methods componentDidMount and componentWillUnmount 
// to manage listening for changes in the bankStore.
//
// Whenever the store changes, the component's state get updated (and, as you know, as the 
// state changes, the component will re-render itself).
//
// Notice the store's subscribe method returns a function that is used to unsubscribe from it - 
// you are storing this function in this.unsubscribe.

// It's also worth noticing the render() function of the code that it's returning the 
// BankAccount component and mapping the state of balance to a prop "balance". It is also 
// mappping two callbacks (onDeposit and onWithdraw) that will be used to dispatch actions to 
// the store.
//
// Everything is wired up. Let's throw some styling and test the application: Try withdraw and 
// deposit operations and make sure you have the browser console opened so that you can see all 
// the actions logged by the reducer function. 


// React bindings for Redux (react-redux)
//..............................................................................................
//  The library provides two utilities to connect React components to a "Redux" store.
//
//  1. A connect function: Creating container functions for the purpose of mapping state and
//     dispatch calls to props for child, purely presentational components is such a common
//     practice in React + Redux apps that the React bindings library provides a utility 
//     function that does that: It generates container functions for you. The container 
//     functions generated by "connect" will automatically subscribe to the store on mount 
//     (and unsubscribe on unmount). 
//
//  2. A provider component: Wrapping your application around the provider component will make 
//     sure that every container components created with connect function had access to the same
//     store. 

// Automatically generate a container component by mapping state and dispatch to props.
//..............................................................................................
const mapStateToProps = ( state ) => {
    
    return {
        // re: combinedReducers in bankReducer.js
        balance: state.pd,                      // problem domain state component
        showExchange: state.ui.showExchange,    // user interface state component
    }
}   

const mapDispatchToProps = ( dispatch ) => {
    
    return {
        onDeposit: ( amount ) => dispatch( bankActionCreators.depositIntoAccount( amount ) ), 
        onWithdraw: ( amount )=> dispatch( bankActionCreators.withdrawFromAccount( amount ) ),
        onToggle: () => dispatch( bankActionCreators.toggleExchange() )
    } 
}    

const BankAccountContainer = connect( mapStateToProps, mapDispatchToProps) (BankAccount);

export default BankAccountContainer;

//..............................................................................................
// Conclusion: From now on, all the conatainer components in the project whose purpose is to 
// to connect to the Redux store and map its state and dispatch to props for child, 
// presentational components will be created with the connect function: USM automation!
//..............................................................................................

// eof
 