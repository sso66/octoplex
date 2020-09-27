// AlertConditions.js
console.log( "Mounting AlertConditions.js..." );

/*---------------------------------------------------------------------------------
 * Conditional Alerts: If a condition is added to an alert, then the condition must
 * be met as well as the data for the class of alert.
 *
 * Example: A low oil pressure alert for an engine will sound any time the oil
 * pressure drops below the critical value. But when the engine is turned off, the
 * oil pressure will also drop below the critical value and the alert will sound
 * although this is normal operation.
 *
 * To prevent this false alert; add a condition to the alert that entine RPM needs
 * to be above 400 RPM so that the alert will not sound when the engine is off.
 *---------------------------------------------------------------------------------*/

// The condition will be met if the monitored value drops below the value in this
// condition.
export const CONDITION_LOW = 'Low Condition';

// The condition will be met if the monitored value rises above the value in this
// condition.
export const CONDITION_HIGH = 'High Condition';

// The condition will be met if the monitored switch or flag is ON.
export const CONDITION_ACTIVE = 'Active Condition';

// The condition will be met if the GPS status is at least as good as the value in
// this condition.
export const CONDITION_GPS_STATUS = 'GPS Status Condition';

// eof
