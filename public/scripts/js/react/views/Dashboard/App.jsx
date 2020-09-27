// File: src/containers/App.jsx
// Desc:
// Date: 8/1/2019
console.log( "Mounting App.jsx... <App />" );

import React, { Component } from 'react';

import Index from '../containers/Index';
import Header from '../components/Site/Header/Header';
import Main from '../components/Site/Main';
import Footer from '../components/Site/Footer/Footer';
import '../styles/App.sass';


export class App extends Component {
        
    render() {
        
        const { store, actions } = this.props;
        
        console.log( "Testing ReduxAPI bindActionCreators(DateTime.actionCreators, dispatch) actions.currentTime.fetchNewTime />: " 
                    + actions.currentTime.fetchNewTime );
                    
        
        return (
             <section className='app'>
                <Index actions={ actions }>
                    <Header title='Carling Technologies' />
                    <Main />
                    <Footer />
                </Index>
             </section>
        ) 
    }
}

export default App;

// eof
