// VideoDataTypes.js
console.log( "Mounting VideoDataTypes.js..." );

const VideoDataTypes = [

    Video = {
        objectId: "DT-01",
        objectTypes: "Video",
        desc: "Video is not received on the NMEA2000 bus. It is either received on" +
                " the Ethernet Bus, or directly from a camera connected to the USB port" +
                " the computer.",
        componentTypes: [ Video, VideoPTZ ],
        sources: "Camera Sources are defined in the Camera Setup Screen," +
                    " and are selected from a list presented in the Component Editor."
    }
];

export VideoDataTypes;

// eof