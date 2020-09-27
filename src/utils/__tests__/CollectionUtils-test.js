// CollectionUtils-test.js
console.log("Mounting CollectionUtils-test.js...");

jest.autoMockOff();

describe( 'Collection utilities module', function () {

    var CollectionUtils = require( '../CollectionUtils' );

    var collectionAlertsMock = {
        collectionAlert7: {},
        collectionAlert8: {},
        collectionAlert9: {},
    };

    it( 'returns a number of alerts in collection', function getNumberOfAlertsInCollection() {

        var actualNumberOfAlertsInCollection = CollectionUtils.getNumberOfAlertsInCollection( collectionAlertsMock );

        var expectedNumberOfAlertsInCollection = 3;

        expect( actualNumberOfAlertsInCollection ).toBe( expectedNumberOfAlertsInCollection );

    } );

    it( 'checks if collection is not empty', function isNotEmptyCollection() {

        var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection( collectionAlertsMock );

        expect( actualIsEmptyCollectionValue ).toBeDefined();
        expect( actualIsEmptyCollectionValue ).toBe( false );
        expect( actualIsEmptyCollectionValue ).not.toBe( true );

    } );

} );

// eof 
