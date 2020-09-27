// StartupDisclaimer.js
console.log("Mounting StartDisclaimer.js... <StartupDisclaimer />");

import React from 'react';

const title = "Disclaimer";
const subtitle = "Vessel Monitoring and Control System";
const version = "Software Version - 0.0.18";
const notice = `WARNING: By pressing "Accept" you ackowledge that while OctoPlex products are designed
to be accurate and reliable, they should be used only as aids to navigation and vessel 
monitoring and control and not as a replacement for traditional aids and techniques.`;

const StartupDisclaimer = () => { 
    return (
        <div>
            <section className="hero is-black is-medium">
                <div className="hero-body">
                    
                    <div className="container">
                        <h1 className="title is-1">
                            {title}
                        </h1>                        
                        <h2 className="subtitle is-3">
                            N2KView &reg; - {subtitle}
                        </h2>
                    </div>                        
                 </div>
            </section>
            <section className="panel">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="card">  
                                <h3 className="title is-4">{version}</h3>
                                <div className="title is-4">{notice}</div>
                                <br /><br />
                                <span className="title is-5">Label (Display Name)</span> 
                                 :&nbsp;<input type="search"  placeholder="Helm..." />
                                 
                                <hr />
                                <p className="title is-5">Please give this device running N2KView a name (e.g. Helm or Engine Room)</p>
                                <br />
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a onClick={alert} className="button is-medium is-danger">
                                            Exit
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button is-medium is-warning">
                                            Enter Demo Mode
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button is-medium is-success">
                                             Accept
                                        </a>
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </div>                        
                </div>
            </section>
        </div>
    ) 
}

export default StartupDisclaimer;

// eof