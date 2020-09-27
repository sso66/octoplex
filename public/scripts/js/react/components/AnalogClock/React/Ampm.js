// Ampm.jsx
console.log("Mounting Ampm.jsx ... <Ampm />");

import React from 'react';

const Ampm = ({hours}) => (<span>{hours >= 12 ? 'pm' : 'am'}</span>)

export default Ampm;

// eof
