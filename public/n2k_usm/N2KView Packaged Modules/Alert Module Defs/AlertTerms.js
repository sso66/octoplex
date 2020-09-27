// AlertTerms.js
console.log( "Mounting AlertTerms.js...." );
/*---------------------------------------------------------------------------------
 *  The alert terminology used in N2KView System.
 ----------------------------------------------------------------------------------*/
// The user action of acknowledging the existence of an alert. Alerts are only
// accepted when they are 'Active'.
export const TERM_ACCEPT = 'Accept';

// The user action of removing an alert from the list of displayed alerts. Alerts
// may only be cancelled if the condition causing the the alert has been removed.
export const TERM_CANCEL = 'Cancel';

// An alert may be limited by a condition to prevent false triggering.
export const TERM_CONDITION = 'Condition';

// An alert must be acknowledged by the user, and this action can happen when the
// alert is active or the condition using the alert has been  removed without the 
// Alert being previously acknowledged.
export const TERM_ACKNOWLEDGE = 'Acknowledge';

// An alert is cleared when the condition causing the alert is removed.
export const TERM_CLEAR = 'Clear';

// An alert is triggered when the condition monitored by the alert is met.
export const TERM_TRIGGER = 'Trigger';


// eof
