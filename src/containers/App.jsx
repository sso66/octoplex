// File: src/containers/App.jsx
// Desc: SPA entry point
// Date: 8/24/2019
//..............................................................................
console.log( "Mounting App.jsx... <App />" );

import React, { Component } from 'react';

import Index from '../containers/Index';
import Header from '../components/Site/Header/Header';
import Main from '../components/Site/Main';
import Footer from '../components/Site/Footer/Footer';
import '../styles/App.sass';


export class App extends Component {
        
    render() {
        
        const { store  } = this.props;
        
        return (
             <section className='app'>
                <Index store={ store }>
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
