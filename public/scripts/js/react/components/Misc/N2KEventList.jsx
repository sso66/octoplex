// N2KEventList.jsx
// Using HTML DOM with React
console.log("Mounting N2KEventList.jsx... <N2KEventList />");

import React from 'react';
import classnames from 'classnames';

const evts = [
    'Click', 
    'DoubleClick',
    'MouseMove', 
    'MouseUp', 
    'MouseDown', 
    'MouseLeave', 
    'TouchStart', 
    'TouchEnd'
];

class N2KEventList extends React.Component {
    constructor(props) {
        super(props);

        this.state = evts.reduce((sum, e) => ({
            sum,
            [e]: false
        }), {});
    }

    handleEvent(name, evt) {
        this.setState({ [name]: true });
    }

    reset(name) {
        this.setState({ [name]: false });
    }

    render() {

        return (
 
            <div className="container">
                <ul className="columns">
                    {evts.map(e => {
                        const triggered = this.state[e];
                        const props = {
                                [`on${e}`]: this.handleEvent.bind(this, e)
                        }
                
                        return (
                            <li className="eventListing column" key={e}>
                                <div 
                                    className="reset"
                                    onClick={this.reset.bind(this, e)}>
                                    <i className="fa fa-refresh" />
                                </div>
                        
                                <div className="name" {...props}>
                                    {`on${e}`}
                                </div>
        
                                <div className="trigger">
                                    <i className={classnames("fa", { 
                                            "fa-square": triggered, "fa-square-o": !triggered
                                        })} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default N2KEventList;

// eof