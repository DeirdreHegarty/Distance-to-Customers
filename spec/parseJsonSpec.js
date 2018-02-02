var H = require('../Haversine.js');

// testing Haversine function in Haversine.js
describe("Haversine", function() {
	it("should get the distance between a sample customer and the origin", function() {
		lat1 = 52.986375;
		long1 = -6.043701;

		lat2 = 53.339428;
		long2 = -6.257664;

		expect(H.Haversine(lat1, long1, lat2, long2)).toBeCloseTo(41.77, 2);
	})
	it("should get the distance between the North Pole and the origin", function() {
		northPoleLat = 90;
		northPolelong = 0;

		lat2 = 53.339428;
		long2 = -6.257664;
		
		//using whole number because calculator used returned used whole number
		expect(H.Haversine(northPoleLat, northPolelong, lat2, long2)).toBeCloseTo(4076, 0);
	})
});
// testing degToRad function in Haversine.js
// testing against Google Calculator output
describe("degToRad", function() {
	it("should convert 180 degrees to 3.14159 radians", function() {
		var Deg1 = 180;
		expect(H.degToRad(Deg1)).toBeCloseTo(3.14159);
	});
	it("should convert 90 degrees to 1.5708 radians", function() {
		var Deg2 = 90;
		expect(H.degToRad(Deg2)).toBeCloseTo(1.5708);
	});
	it("should not return null when converting degrees to radians", function() {
		var Deg3 = 0;
		expect(H.degToRad(Deg3)).not.toBe(null);
	});
	it("should not return null when converting degrees to radians", function() {
		var Deg4 = 53.339428;
		expect(H.degToRad(Deg4)).toBeCloseTo(0.930948639728);
	});
	it("should not return null when converting degrees to radians", function() {
		var Deg5 = -6.257664;
		expect(H.degToRad(Deg5)).toBeCloseTo(-0.10921684028);
	});
});