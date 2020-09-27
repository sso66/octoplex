// VesselAlertOperatingModes.js
console.log( "Mounting VesselAlertOperatingModes.js..." );

/*---------------------------------------------------------------------------------
 * The following options are to operate in one of more vessel operation modes. This
 * allows us to easily enable or disable groups of individual alerms depending on
 * the vessel's operating mode. The Vessel Alert Operating Mode is set under the
 * Alerts Setup tab.
 /---------------------------------------------------------------------------------*/

// All alerts are disabled. This mode should be used when the vessel is in storage,
// drydock or otherwise out of operation.
export const OP_MODE_DISABLED = 'Disabled';

// This mode is used when the vessel is secured to a structure that is permanently
// attached to the ground like a pier, wharf, dock, or mooring buoy.
export const OP_MODE_MOORED = 'Moored';

// This mode is used when the vessel is not moored nor anchored.
export const OP_MODE_UNDERWAY = 'Underway';

// This mode is used when the vessel is secured to the sea floor with an anchor.
export const OP_MODE_ANCHORED = 'Anchored';

// This is a user defined mode.
export const OP_MODE_USER_1 = 'User 1';

// This is another user defined mode.
export const OP_MODE_USER_2 = 'User 2';

// eof

