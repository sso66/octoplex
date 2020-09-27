// components/GitHub/GitHubViewDelegate.js
console.log ( "Mounting GitHubDelegate.js... <GitHubDelegate />" );
//.................................................................
// An alogrithm is a set of instructions that specify exactly how
// to solve a particular problem in a finite number of steps.
//.................................................................
import React from 'react';
import moment from 'moment';

//class GitHubViewDelegate extends React.Component { 
    //render() {
        //const { activity } = this.props;
    //}

// Presentation component: stateless - How It Looks!
const GitHubViewDelegate = (props) => { 

    const { activity } = props;
    
    return (
        <div className='item'>
            <div className={'avatar'}>
                <img
                    alt='avatar'
                    src={activity.actor.avatar_url} />
            </div>
           
            <span className={'time'}>
                {moment(activity.created_at).fromNow()}
            </span>
            
            <p>{activity.actor.display_login} {activity.payload.action}</p>
            
            <div className={'repo'}>
                {activity.repo.name}
            </div>
            
            <div className="circle">
                <p>{activity.id}</p>
            </div>

            <div className="commentCount">
                <p>{activity.type}: {activity.actor.id}</p>
            </div>
        </div>
    )
}

GitHubViewDelegate.propTypes = {
    // todo
}

GitHubViewDelegate.defaultProps = {
    // todo
}

export default GitHubViewDelegate

// eof 