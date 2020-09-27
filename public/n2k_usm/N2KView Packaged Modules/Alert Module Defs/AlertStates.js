// AlertStates.js
console.log( "Mounting AlertStates.js..." );

/*---------------------------------------------------------------------------------
 * Alert exists in one of five states.
----------------------------------------------------------------------------------*/

// A 'Disabled' alert is an alarm or warning that has yet to be enabled or
// activated. In this state, no action will be taken regardless of the value of
// the monitored parameter. A 'Disabled' alert may be enabled in which case it
// transitions to an inactive state.
export const STATE_DISABLED = 'Disabled';

// An 'Inactive' alert is an alarm or warning that has been enabled, but the
// condition causing the alert is not present. If the alert condition becomes true,
// the alert will become 'Active'. An 'Inactive' alert may be disabled, which
// causes it to transition to the 'Disabled' state. New alert are created in the
// 'Inactive' state.
export const STATE_INACTIVE = 'Inactive';

// An 'Active' alert is an alarm or warning where the condition to trigger the
// alert// has been met, and is still present and the operator has not accepted
// the alert. An 'Active' alert is indicated by a flashing indicator with the
// Alert Status Bar and on the Alerts Screen. Also, annunicatiors that are
// programmed to sound when this alert is active will be sounding during this
// state, any email mesages that are programmed to be sent for this alert, will be
// sent when this state is entered. An 'Active' alert can be accepted by the user
// (causing it to become an 'Accepted' alert) or disabled by the user (causing it
// to become a 'Disabled' alert). If the condition causing the alert is rectified,
// the alert transitions to the 'Awaiting Cancel' state.
export const STATE_ACTIVE = 'Active';

// An 'Accepted' alert is an alerm or warning which 'Active' and has been accepted
// by the user. An 'Accpeted' alert is indicated by a solid indicator in the Alert
// Status Bar and a solid color on the Alert Status Screen; annunciators are
// silenced. Normally, an alert is a serious matter that requires immediate atention
// and requires a deliberate attemp to remove the condtion that caused the alert.
// Sometimes it isn't practical to immediatly remove the condition that cause the
// alert; accepting the alert will silence the annuciators while the appropriate
// user action is being taken.
//
// To prevent an alert that has accepted by the user from being forgetten, an
// accepted alert will transition back to being 'Active' after a period of time set
// by the user. If the condition causing the alert is rectified (cleared), the alert
// will transition to the 'Inactive' state.
//
// You may disable the alert at this time, causing it to become a 'Disabled' alert.
export const STATE_ACCEPTED = 'Accepted';

// An Alert in the 'Awaiting Cancel' stat is an alert where the condition that caused
// the alarm or warning has been removed with the alert being accepted while it was
// 'Active'. To avoid such alerts from beng missed by the user, the alert require to
// be cancelled. You may cancel the alert at this time, causing it to become an
// 'Inactive' alert, or you may disable the alert, causing it become a 'Disabled'
// alert. Should the condition trigger the alert again, the alert wil transition
// back to the 'Acive' state, incrementing a counter whid is displayed on the Alert
// Status Screen in the "What Happened" column.
export const STATUS_AWAITING_CANCEL = 'Avaiting Cancel';

// eof
