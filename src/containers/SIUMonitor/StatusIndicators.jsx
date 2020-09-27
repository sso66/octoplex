// File: src/containers/SiuMonitor/StatusIndicators.jsx
// Desc: marine digital dashboard ui
// Date: 8/12/2019
//...............................................................................
console.log("Mounting StatusIndicators.jsx... <StatusIndicators />");

import React from 'react';

import N2KIndicator2x1 from '../../components/Indicator/N2KIndicator2x1';
import N2KIndicator4x1 from '../../components/Indicator/N2KIndicator4x1';

const StatusIndicators = (props) => {
    return (
        <div className="status-indicators">
           
            <table className="container">
            <thead>
                    <tr>
                        <th></th>
                        <th><N2KIndicator2x1 name="Port Gen."/></th>
                        <th><N2KIndicator2x1 name="System #1 Shore"/></th>
                        <th><N2KIndicator2x1 name="System #2 Shore"/></th>
                        <th><N2KIndicator2x1 name="Stbd Gen."/></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>&nbsp;</td></tr>
                    <tr>
                        <td><N2KIndicator4x1 name="Salon Elec. Door" /></td>
                        <td><N2KIndicator4x1 name="Dinette Port Elec. Door" /></td>
                        <td><N2KIndicator4x1 name="Dinette Stbd Elec. Door" /></td>
                        <td><N2KIndicator4x1 name="Aft Deck Door" /></td>
                        <td><N2KIndicator4x1 name="E/R Door" /></td>
                        <td><N2KIndicator4x1 name="Transom Door" /></td>
                    </tr>
                    <tr>
                        <td><N2KIndicator4x1 name="Fwd Bilge HI Water" /></td>
                        <td><N2KIndicator4x1 name="Mid Bilge 1 HI Water" /></td>
                        <td><N2KIndicator4x1 name="Mid Bilge 2 HI Water" /></td>
                        <td><N2KIndicator4x1 name="Fwd E/R  Bilge HI Water" /></td>
                        <td><N2KIndicator4x1 name="Crew E/R  Bilge HI Water" /></td>
                        <td><N2KIndicator4x1 name="Laz. Bilge HI Water" /></td>
                    </tr>
                 </tbody>
            </table>
        </div>
    );
}

export default StatusIndicators;

// eof
