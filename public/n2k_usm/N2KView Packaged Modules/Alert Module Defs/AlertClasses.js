// AvailableAlertClasses.js
console.log( "Mounting AlertClasses.js..." );

/*---------------------------------------------------------------------------------
 * N2KView has several classes of alerts. Different alert classes are available
 * depending on the parameter (object types) for which an alert is being
 * configured.
 *---------------------------------------------------------------------------------*/

// This alert will become active if the monitored value drops below the value in
// this alert for longer than the time specified in the Set Delayfield.
export const CLASS_LOW = "Low Alert";

// This alert will become active if the monitored value rises below the value in
// this alert for longer than the time specified in the Set Delay field.
export const CLASS_HIGH = "High Alert";

// The alert will become active if the monitored value is not received, or is
// received but with a value of "Data Not Available", for longer than the time
// specified in the Set Delay field.
export const CLASS_DATA_UNAVAILABLE = 'Data Unavailable Alert';

// The alert will become active if the monitored switch of flag becomes "ON" for
// longer than the time specified in the Set Deley field.
export const CLASS_ON = 'On Alert';

// The alert will become active if the monitored switch of flag becomes "OFF" for
// longer than the time specified in the Set Deley field.
export const CLASS_OFF = 'Off Alert';

// The alert will become active if the monitored value circuit breaker becomes
// "Tripped" for longer than the time specificed in the Set Delay field.
export const CLASS_TRIPPED = 'Tripped Alert';

// The alert will become active if the connection to the server is lost for more
// than the time specified in the Set Delay field.
export const CLASS_SERVER_DISCONNECTED = 'Server Disconnected Alert ';

// The alert will become active if the monitored course differs from the Reference
// Direction by more than the Offset COG Set Point for longer than the time
// specified in the Set Delay field.
export const CLASS_COURSE = 'Course Alert';

// The alert will become active if the GPS Quality drops below the level set in the
// GPS Quality Alert Set field for longer than the time specificed in the Set Delay
// field.
export const CLASS_GPS_QUALITY = 'GPS Quality Alert';

// The alert will become active if the distance between the current GPS position
// and Reference Latitude and Longitude rises above the value in the Outside Radius
// Alert Set field for longer than the time specified in the Set Delay field.
export const CLASS_OUTSIDE_RADIUS = 'Outside Radius Alert';

// The alert will become active if the distance between the current GPS position and
// Reference Latitude and Longitude falls below the value in the Outside Radius
// Alert Set field for longer than the time specified in the Set Delay field.
export const CLASS_INSIDE_RADIUS = 'Inside Radius Alert';

// The alert will become active if the distance between the current GPS position and
// the Reference Latitute and Longitude rises above the value in the Anchor Watch
//  Alert Set Point field for longer than the time specified in the Set Delay Field.
export const CLASS_ANCHOR_WATCH = 'Anchor Watch Alert';

// The alert will become active if the monitored course differs from the Reference
// Direction by more than the Offset Wind Direction Set Point for longer than the
// time specified in the Set Delay field.
export const CLASS_DIRECTION = 'Direction Alert';

// The alert will become active when the time reaches the time specified in the Alarm
// Time field, and thereafter after the intervals specified in the Repeat Interval
// field.
export const CLASS_TIMER = 'Timer Alert';

// The alerts will become available when the switch / breaker is turned ON.
export const CLASS_BURNT_OUR_BULB = 'Burnt Our Bulb Alert';
export const CLASS_LOW_CURRENT_WHEN_ON = 'Low Current When On Alert';
export const CLASS_HIGH_CURRENT_WHEN_ON = 'High Current When On Alert';

// The alerts will become available when Vessel Data Recording is not recording.
export const CLASS_NOT_RECORDING = 'VDR Not Recording';

// eof
