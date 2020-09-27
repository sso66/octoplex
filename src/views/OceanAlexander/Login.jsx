// src/views/OceanAlexander/Login.jsx
console.log( "Mounting Login.jsx ... <Login />" )

import React from 'react';
// All of bulma

// Only the plugins you need
//import Navbar from '@vizuaalog/bulmajs/src/plugins/Navbar';

const Login = ( props ) => (
    <div className="login">
        <div className="section">
            <div className="container">
                <section className="hero is-black is-halfheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="column is-4 is-offset-4">
                                <h3 className="title has-text-grey">Login</h3>
                                <p className="subtitle has-text-grey">Please login to proceed.</p>
                                <div className="box">
                                    <figure className="avatar">
                                        <img src="https://placehold.it/128x128" />
                                    </figure>
                                    <form>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="email" placeholder="Your Email" autoFocus="" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="password" placeholder="Your Password" />
                                            </div>
                                        </div>
                                        
                                        <div className="field">
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                    Remember me
                                            </label>
                                        </div>
                                        <button className="button is-block is-info is-large is-fullwidth">Login</button>
                                    </form>
                                </div>
                                <p className="has-text-grey">
                                    <a href="../">Sign Up</a> &nbsp;·&nbsp;
                                    <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                    <a href="../">Need Help?</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>                            
    </div>
)

export default Login;

// eof
