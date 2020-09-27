// WaterMaker.jsx
console.log("Mounting WaterMaker.jsx");
/*---------------------------------------------------------------------------------
 * N2KView can display data sent over the NMEA2000 bus by a Sea Recovery Watermaker 
 * equipped with an NMEA2000 interface. With the licensing of the Control Module, 
 * the watermaker may also be commanded to Stop, Start, and start a Flush cycle.
 * 
 * Because the Emergency Stop cannot be restarted remotely, this action requires 
 * a second step to prevent accidental activation. The following confirmation 
 * message is displayed in the center of the component for 3 seconds.
 * 
 * If the user presses the confirm button, the command will be sent to the 
 * watermaker. If after 3 seconds the button has not been pressed, it will be 
 * erased and no command will be sent. Sending a command will not change any of 
 * the displayed parameters. Only when the watermaker has received the command, and 
 * transmits new device parameters on the bus will the component to be updated with 
 * the new parameters received on the bus. For details on the commands and values 
 * displayed, please refer the documentation supplied with the watermaker.
 *---------------------------------------------------------------------------------*/
