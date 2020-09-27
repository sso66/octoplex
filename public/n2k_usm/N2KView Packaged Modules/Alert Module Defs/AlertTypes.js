// AlertTypes.js
console.log( "Mounting AlertTypes.js...." );

/*---------------------------------------------------------------------------------
 * A alert is a signal to a user that there is either an alam or warning condition
 * requiring user action.There are two types of Alert, which are distingushed by
 * their severtity:
 ---------------------------------------------------------------------------------*/

// An alarm is a type announcing a condition require immediate attention or user
// intervention. Alarms are shown in red, and always appear to the left of
// warnings in the Alert Ticker and above the warnings on the Alert Screen.
export const TYPE_ALARM = 'Alarm';

// A warning alarm is a type announcing a condition requiring non-immediate
// attention for precautionary reasons. Warnings are shown in yellow, and always
// appear to the right of Alarms in the Alert Ticker below alarms on the Alert
// Status Screen.
export const TYPE_WARNING = 'Warning';

// eof
