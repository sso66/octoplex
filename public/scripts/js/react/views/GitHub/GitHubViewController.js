// GitHubViewController.js
console.log( "Mounting GitHubViewController.js... <GitHubViewController />" );
//.................................................................
// An alogrithm is a set of instructions that specify exactly how
// to solve a particular problem in a finite number of steps.
//.................................................................
import React from 'react';
import GitHubViewDatasource from '../../containers/GitHub/GitHubViewDatasource';
import data from '../../utils/data.json';

// Make an async request
const fetchEvents = (data) => Promise.resolve(data)
                      .then(json => json.slice(0, 4))

// Container component: stateful - How It Works!
class GitHubViewController extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {refreshing: false}    // <~ set refresining to false
    }

    // Bound to the refresh button
    handleRefreshClick() {
        this.setState({refreshing: true})
    }

    // Callback from the `Content` component
    handleRefreshChange() {
        this.setState({refreshing: false});
    }

    render() {
        const {refreshing} = this.state;

        return (
            <div className="section">
                <div className="container">
                    {/* refreshing is the component's state */}
                    <GitHubViewDatasource
                        handleRefreshChange={this.handleRefreshChange.bind(this)}
                        requestRefresh={refreshing}
                        fetchData={fetchEvents} />
            
                    <button className="button is-info" onClick={this.handleRefreshClick.bind(this)}>
                        <i className="fa fa-refresh" />
                            &nbsp;&nbsp;Refresh
                    </button>
                </div>
            </div>
        )
    }
}

export default GitHubViewController;

// eof