// containers/GitHub/GitHubDataSource.js
console.log( "Mounting GitHubDataSource.js... <GitHubDataSource />" );
//.................................................................
// An alogrithm is a set of instructions that specify exactly how
// to solve a particular problem in a finite number of steps.
//.................................................................
import React from 'react';
import GitHubViewDelegate from '../../components/GitHub/GitHubViewDelegate';
import data from '../../utils/data.json';

//const data = require('../../utils/data.json');
//const data = require('../../utils/data.json').slice(0, 4); // limit to 4 records

// Container component: stateful - How It Works! in Sync operation
class GitHubViewDataSource extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            loading: false, // <~ set loading to false
            activities: []
        };
    }
    
    // Call before component is due to be mounted 
    componentWillMount() {
        this.setState({activities: data});    
    }
    
    // Call just after the component has been mounted
    componentDidMount() {
        // Update the data when the component mounts
        this.updateData();
    }
    
     //Add new requestRefresh boolean prop to nextProps object
    componentWillReceiveProps(nextProps) {
        // Check to see if the requestRefresh prop has changed
        if (nextProps.requestRefresh === true) {
          this.setState({loading: true}, this.updateData);
        }
    }

    // Call out to github data and refresh directory
    updateData() {
        this.setState(
            {
            loading: false,
                //activities: data.slice(0, 4)
                activities: data.sort(() => 0.5 - Math.random()).slice(0,4)
            },
            this.props.handleRefreshChange
        );
    }

    render() {
        
        const {loading, activities} = this.state;
    
        return (
            <div className="content">
                {/* Draw a vertical line */}
                <div className="line" />
                
                {/* Show loading message if loading */}
                {loading && <div>Loading</div>}
                
                {/* GitHub item */}
                {activities.map(activity => (
                    <GitHubViewDelegate key={activity.id} activity={activity} />
                ))}
            </div>
        )
    }
}

export default GitHubViewDataSource;

// eof
