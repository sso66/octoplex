// File: src/containers/Diagnostics/Collection.jsx
// Desc: react childern prototype
// Date: 8/8/2019
//...............................................................................   
console.log( "Mounting Collection.jsx... <Collection />" );

import React, { Component } from 'react';
import Picture from './Picture';
import Button from './Button';
import Layout from './Layout';


class Collection extends React.Component {
    constructor( props ) {
        super( props );
    
        this.state ={
            pictures: [
                { id: 1, src: 'http://via.placeholder.com/200x100' },
                { id: 2, src: 'http://via.placeholder.com/400x200' },
                { id: 3, src: 'http://via.placeholder.com/200x100' }
            ],
            currentPic: null
        }
    
        this.setCurrentPic = this.setCurrentPic.bind( this );
    }
    
    setCurrentPic( id ) {
        this.setState( { currentPic: id } );
    }
    
    render() {
        return (
            <div>
                 
                <div className="squares">
                    { this.state.pictures.map( ( picture ) => {
                        return (
                            <Picture key={ picture.id } src={ picture.src }>
                                <Button
                                    pictureSrc={ picture.src }
                                    setCurrentPic={ this.setCurrentPic }
                                    id={ picture.id }
                                />
                            </Picture>
                        )
                    })}
                </div>

                <div>
                    <p>Current selected picture ID is { this.state.currentPic } </p>
                </div>
            </div>                    
        )
    }
}

export default Collection;


// eof

