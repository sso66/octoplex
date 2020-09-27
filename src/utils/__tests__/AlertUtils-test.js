// AlertUtils-test.js

jest.dontMock( '../AlertUtils' );

describe( 'Alert utilities module', function () {

    it( 'returns an array of alert ids', function () {

        var AlertUtils = require( '../AlertUtils' );

        var alertsMock = {
            alert1: {},
            alert2: {},
            alert3: {}
        };
        var expectedListOfAlertIds = [ 'alert1', 'alert2', 'alert3' ];
        var actualListOfAlertIds = AlertUtils.getListOfAlertIds( alertsMock );

        expect( actualListOfAlertIds ).toEqual( expectedListOfAlertIds );

    } );

} );

