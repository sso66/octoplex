// N2KModel.js
console.log( "Mounting N2KModel.jsx prototype...Re: O/P/M/E/E/S/S paradigm" );

// AlertModuleDefs 
const CLASS_LOW = "Low Alert";
const CLASS_HIGH = "High Alert";
const CLASS_DATA_UNAVAILABLE = "Data Unavailable Alert";

// Available Component Types
const Gauge = { name: "Gauge" };
const Digital = { name: "Digital"};
const LineGraph = { name: "Line Graph" };

// AvailablAlerts
const AverageFrequencyAlert = {
  objectId: "AT-01",
  objectTypes: "AC Bus",
  desc: "Monitors the average frequency of an AC bus across all phases.",
  alertClasses: [ CLASS_LOW, CLASS_HIGH, CLASS_DATA_UNAVAILABLE ],
  instances: 253,
  units: "Hertz"
};

// AvailableDataTypes
const AverageFrequencyDataType = {
  objectId: "DT-01",
  objectTypes: "AC Bus",
  desc: "Displays the average frequency of an AC bus across all phases on an AC bus.", 
  componentTypes: [ Gauge.name, Digital.name, LineGraph.name ],
  instances: 253,
  units: "Hertz"
};

// N2KModel: React+React 2D Components / GLScreenManager: Three 3D Components
function N2KModel( AvailableAlerts, AvailableDataTypes ) {
  console.log( "Instantiate N2KModel" );

  this.objectIdForAT = AvailableAlerts.objectId;
  this.objectIdForDT = AvailableDataTypes.objectId;
  this.objectTypes = AvailableAlerts.objectTypes;
  this.descMonitor = AvailableAlerts.desc.toUpperCase();
  this.alertClasses = AvailableAlerts.alertClasses;
  this.componentTypes = AvailableDataTypes.componentTypes;
  this.instances = AvailableAlerts.instances;
  this.units = AvailableAlerts.units;
  this.descDisplay = AvailableDataTypes.desc.toUpperCase();

  console.log(
      this.objectIdForAT + "\n" 
      + this.objectIdForDT + "\n"
      + this.objectTypes + "\n"
      + this.descMonitor + "\n"
      + this.alertClasses + "\n"
      + this.componentTypes + "\n"
      + this.instances + "\n"
      + this.units + "\n"
      + this.descDisplay + "\n"
  );

}

// @ implement
const N2KMain = new N2KModel ( AverageFrequencyAlert, AverageFrequencyDataType );
console.log( "N2KMain: " + N2KMain );

// eof

