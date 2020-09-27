// File: src/containers/Diagnostics/Selection.jsx
// Desc: react childern prototype
// Date: 8/8/2019
//...............................................................................   
console.log( "Mounting Selection.jsx... <Selection />" );

import React, { Component } from 'react';
import Picture from './Picture';
import Button from './Button';
import Layout from './Layout';

class Selection extends React.Component {
    constructor( props ) {
        super( props );
    
        this.state ={
            pictures: [
                { id: 1, src: 'http://via.placeholder.com/200x100' },
                { id: 2, src: 'http://via.placeholder.com/400x200' },
                { id: 3, src: 'http://via.placeholder.com/150' }
            ],
            currentPic: null
        }
    
        //this.setCurrentPic = this.setCurrentPic.bind( this );
    }
    
    // setCurrentPic( id ) {
        // this.setState( { currentPic: id } );
    // }
    
    render() {
        return (
            <div>
                <div className="squares">
                    <Picture src={ this.state.pictures[0].src }>
                        <p>Hey, I'm some text!</p>
                    </Picture>
                    
                    <Picture src={ this.state.pictures[1].src }>
                      <Button pictureSrc={ this.state.pictures[1].src } />
                    </Picture>
                    
                    <Picture src={ this.state.pictures[2].src }>
                        <Picture src={ this.state.pictures[2].src } />
                    </Picture>                        
                </div>

                <div>
                    <p> You didn't have to change the <b>Picture</b> component at all. 
                        Since it knows to just render <i>props.children</i> it will do just that 
                        and you can customize the content under each <b>Picture</b> to whatever 
                        you need. You can keep reusing the same component.
                    </p>
                    <hr />
                    <p>                         
                        For more info: <u>React.Children API</u>.
                    </p>
                </div>
            </div>                    
        )
    }
}

export default Selection;


// eof

