// Video.js
console.log( "Mounting Video.js... <Video />" );

import React from 'react';
import { connect } from 'react-redux';
//import { fetchNewTime } from '../../redux/Timer/actionCreators';
import IFrame from 'react-iframe';

export const Video = (props) => {
    return (
        <div> 
            <section className="hero is-black is-small">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Video</h1>
                        <div className="box">
                            <IFrame url="http://www.youtube.com/embed/xDMP3i36naA" 
                                width="100%"
                                height="100%"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                styles={{ width: "640px", height: "480px" }}
                                allowFullScreen
                        />
                        </div>
                    </div>
                </div>   
               {/*
                <div className="hero-foot">
                    <video width="320" height="240" controls>
                        <source src="../assets/videos/sintel_trailer-480p.mp4" type="video/mp4" />
                        <source src="../assets/videos/sintel_trailer-480p.ogv" type="video/ogv" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                */}
            </section>    
        </div>
    )
}

// const mapStateToProps = (state) => {
    // return {
        // currentTime: state.currentTime       
    // };
// }
// 
// const mapDispatchToProps = (dispatch) => ({
    // updateTime: () => dispatch(fetchNewTime()),   
// });

export default connect(
    //mapStateToProps,
    //mapDispatchToProps
)(Video);

// eof