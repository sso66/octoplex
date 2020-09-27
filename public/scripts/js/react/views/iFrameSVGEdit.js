// iframeSVGEdit.js
console.log( "Mounting iframeSVGEdit.js... <iframeSVGEdit />" );

import React from 'react';
import { connect } from 'react-redux';
import IFrame from 'react-iframe';

export const iframeSVGEdit = (props) => {
    return (
        <div> 
            <section className="hero is-black is-small">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">N2KView Component Editor</h1>
                        <div className="box">
                            <IFrame url="https://unpkg.com/svgedit@3.1.1/editor/svg-editor.html" 
                                width="100%"
                                height="100%"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                styles={{height: "500pt"}}
                                allowFullScreen
                            />
                            
                        </div>
                    </div>
                </div>   
               
                <div className="hero-foot">
                </div>
            </section>    
        </div>
    )
}
export default iframeSVGEdit);

// eof