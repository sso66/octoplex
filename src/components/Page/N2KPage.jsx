// File: src/components/Page/N2KPage.jsx
// Desc: Type of Page - Home | Content | Transition | Action
// Date: 9/30/2019
//..............................................................................
console.log("Mounting N2KPage.jsx... <N2KPage />");

import React from 'react';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    
    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    
    render() {
        return (
            <div className="parent-box">
                <div className="child-box">
                    <WarningBanner warn={this.state.showWarning} />
                </div>
                <input 
                    type="button" 
                    defaultValue={this.state.showWarning ? 'Hide' : 'Show'} 
                    className="" 
                    onClick={this.handleToggleClick} 
                />
            </div>                
        )
    }
}

export default Page;