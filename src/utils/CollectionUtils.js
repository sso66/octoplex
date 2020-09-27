// CollectionUtils.js
console.log( "Mounting CollectionUtils.js..." );

function getNumberOfAlertsInCollection( collection ) {

    var AlertUtils = require( './AlertUtils' );
    var listOfCollectionAlertIds = AlertUtils.getListOfAlertIds( collection );

    return listOfCollectionAlertIds.length;

}

function isEmptyCollection( collection ) {

    return ( getNumberOfAlertsInCollection( collection ) === 0 );

}

module.exports = {
    getNumberOfAlertsInCollection: getNumberOfAlertsInCollection,
    isEmptyCollection: isEmptyCollection
};

// eof
